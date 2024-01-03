package com.example.myapplication;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.EditText;
import android.widget.TextView;

public class MainActivity extends AppCompatActivity {
private EditText txtnome;
private EditText txtcod;
private TextView lblmostra;
private EditText txtpreco;
private  double total=0;
public static String codx,nomex,precox;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        txtcod=(EditText) findViewById(R.id.txtcod);
        txtnome=(EditText) findViewById(R.id.txtnome);
        lblmostra=(TextView) findViewById(R.id.lblmostra);
        txtpreco=(EditText)findViewById(R.id.txtpreco);
        findViewById(R.id.button).setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                total=total+Double.parseDouble(txtpreco.getText().toString());
                lblmostra.setText("TOTAL A PAGAR  "+ total);
                codx=txtcod.getText().toString();
                nomex=txtnome.getText().toString();
                precox=txtpreco.getText().toString();
                Intent trocar=new Intent(MainActivity.this,MainActivity2.class);
                MainActivity.this.startActivity(trocar);

            }
        });


    }
}