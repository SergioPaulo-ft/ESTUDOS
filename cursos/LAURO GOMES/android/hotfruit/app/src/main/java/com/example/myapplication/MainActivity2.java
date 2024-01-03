package com.example.myapplication;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.EditText;
import android.widget.Toast;

public class MainActivity2 extends AppCompatActivity {
    public EditText txtcod10,txtnome,txtpreco,txtfoto;
    public static String[] cod=new String[100];
    public static String[] nome=new String[100];
    public static String[] preco=new String[100];
    public static String[] foto=new String[100];
    static int i=0;
    int achou=0;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main2);
        txtcod10=(EditText)findViewById(R.id.txtcod10);
        txtnome=(EditText) findViewById(R.id.txtnome);
        txtpreco=(EditText) findViewById(R.id.txtpreco);
        txtfoto=(EditText) findViewById(R.id.txtfoto);

        findViewById(R.id.btncadastrar).setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                Intent t=new Intent(MainActivity2.this,
                        MainActivity.class);
                MainActivity2.this.startActivity(t);
            }
        });


        findViewById(R.id.btncadastrar).setOnClickListener(new View.OnClickListener() {
             @Override
             public void onClick(View view) {
                 cod[i]=txtcod10.getText().toString();
                 nome[i]=txtnome.getText().toString();
                 preco[i]=txtpreco.getText().toString();
                 foto[i]=foto.getClass().toString();
                 i++;
                 Toast.makeText(getApplicationContext(),"inserido com sucesso",Toast.LENGTH_LONG).show();
             }
         }
        );
    }
}