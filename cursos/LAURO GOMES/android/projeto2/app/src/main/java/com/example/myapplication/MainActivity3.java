package com.example.myapplication;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.ImageView;

public class MainActivity3 extends AppCompatActivity {
private ImageView foto1;
private ImageView foto2;
public static String dadosx="";
public static int n=0;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main3);
        foto1=(ImageView) findViewById(R.id.foto1);
        foto2=(ImageView) findViewById(R.id.foto2);
        if(MainActivity2.op==1) {
            foto1.setImageResource(R.drawable.hotel1);
            foto2.setImageResource(R.drawable.hotel2);
        }
        else
        if(MainActivity2.op==2)
        {
            foto1.setImageResource(R.drawable.carro2);
            foto2.setImageResource(R.drawable.carro3);
        }

   findViewById(R.id.foto1).setOnClickListener(new View.OnClickListener() {
       @Override
       public void onClick(View v) {
           if (MainActivity2.op==1)
           {  dadosx= " DADOS DO HOTEL REI DA SELVA PREÇO: R$340  ";
               n=1;

       }
           if (MainActivity2.op==2)
           {  dadosx= " DADOS DO CARROS  TOYOTA \nPREÇO: R$340000  ";
               n=1;
           }

           Intent trocar=new Intent(MainActivity3.this,MainActivity4.class);
           MainActivity3.this.startActivity(trocar);
       }
   });
        findViewById(R.id.foto2).setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                if (MainActivity2.op==1)
                {  dadosx= " DADOS DO HOTEL PRINCESA PREÇO: R$300  ";
                    n=2;
                }
                if (MainActivity2.op==2)
                {  dadosx= " DADOS DO CARROS PORCHE PREÇO: R$50000  ";
                    n=2;
                }
                Intent trocar=new Intent(MainActivity3.this,MainActivity4.class);
                MainActivity3.this.startActivity(trocar);
            }
        });

    }

}