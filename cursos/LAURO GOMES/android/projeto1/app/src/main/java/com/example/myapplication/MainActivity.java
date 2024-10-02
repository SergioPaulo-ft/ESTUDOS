package com.example.myapplication;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.EditText;
import android.widget.ImageView;
import android.widget.TextView;
import android.widget.Toast;

import com.google.gson.JsonObject;
import com.koushikdutta.async.future.FutureCallback;
import com.koushikdutta.ion.Ion;

public class MainActivity2 extends AppCompatActivity {
    private ImageView fotop;
    private TextView lbllogin;
    private EditText txtsenhax,txtfotox;
    String Host="https://aulateste3.000webhostapp.com/projeto/";
    String url;
    String ret;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main2);
try {
    fotop = (ImageView) findViewById(R.id.fotop);
    lbllogin = (TextView) findViewById(R.id.lbllogin);
    txtsenhax=(EditText)findViewById(R.id.txtsenhax);
    txtfotox=(EditText)findViewById(R.id.txtfotox);
    Ion.with(fotop).placeholder(R.drawable.vazio).
            error(R.drawable.vazio).
            load("https://aulateste3.000webhostapp.com/projeto/imagem/" + MainActivity.fotox + "");
    lbllogin.setText(MainActivity.loginx);
    txtsenhax.setText(MainActivity.senhax);
    txtfotox.setText(MainActivity.fotox);
    findViewById(R.id.button3).setOnClickListener(new View.OnClickListener() {
        @Override
        public void onClick(View v) {
            Intent trocar = new Intent(MainActivity2.this,
                    MainActivity3.class);
            MainActivity2.this.startActivity(trocar);

        }
    });

    findViewById(R.id.button5).setOnClickListener(new View.OnClickListener() {
        @Override
        public void onClick(View v) {
            deletar();
        }
    });

    findViewById(R.id.button4).setOnClickListener(new View.OnClickListener() {
        @Override
        public void onClick(View v) {
            alterar();
        }
    });

}
catch (Exception e) {

    Toast.makeText(getApplicationContext(),  " erro",
            Toast.LENGTH_LONG).show();
}

}
private void deletar()
{
    url=Host+"deletar.php";
    Ion.with (MainActivity2.this)
            .load ( url )
            .setBodyParameter ( "usuario" ,lbllogin.getText ().toString ())
            .setBodyParameter ( "senha",txtsenhax.getText () .toString ())
            .asJsonObject ()
            .setCallback ( new FutureCallback<JsonObject>() {
                @Override
                public void onCompleted(Exception e, JsonObject result) {
                    ret=result.get("status").getAsString ();
                    if(ret.equals ("ok"))
                    {
                       Toast.makeText(getApplicationContext(),
                         " DELETADO COM SUCESSO",   Toast.LENGTH_LONG).show();

                    }
                    else
                    {
                        Toast.makeText(getApplicationContext(),
                                " ERRO DE DELEÇÃO ",   Toast.LENGTH_LONG).show();

                    }
                }
            } );



}


    private void alterar()
    {
        url=Host+"alterar.php";
        Ion.with (MainActivity2.this)
                .load ( url )
                .setBodyParameter ( "usuario" ,lbllogin.getText ().toString ())
                .setBodyParameter ( "senha",txtsenhax.getText () .toString ())
                .setBodyParameter ( "foto",txtfotox.getText () .toString ())
                .asJsonObject ()
                .setCallback ( new FutureCallback<JsonObject>() {
                    @Override
                    public void onCompleted(Exception e, JsonObject result) {
                        ret=result.get("status").getAsString ();
                        if(ret.equals ("ok"))
                        {
                            Toast.makeText(getApplicationContext(),
                                    " ALTERADO COM SUCESSO",   Toast.LENGTH_LONG).show();

                        }
                        else
                        {
                            Toast.makeText(getApplicationContext(),
                                    " ERRO DE ALTERAÇÃO ",   Toast.LENGTH_LONG).show();

                        }
                    }
                } );



    }
    }






