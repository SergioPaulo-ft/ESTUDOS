package com.example.myapplication;

import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;
import android.widget.ImageView;
import android.widget.TextView;

public class MainActivity4 extends AppCompatActivity {
private ImageView fotox;
private TextView dados;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main4);
        fotox=(ImageView) findViewById(R.id.fotox);
        dados=(TextView) findViewById(R.id.dados);
        if(MainActivity2.op==1&&MainActivity3.n==1)
        {
            fotox.setImageResource(R.drawable.hotel1);
            dados.setText(MainActivity3.dadosx);
        }
        else
        if(MainActivity2.op==1&&MainActivity3.n==2)
        {
            fotox.setImageResource(R.drawable.hotel2);
            dados.setText(MainActivity3.dadosx);
        }
        else
        if(MainActivity2.op==2&&MainActivity3.n==1)
        {
            fotox.setImageResource(R.drawable.carro2);
            dados.setText(MainActivity3.dadosx);
        }
        else
        if(MainActivity2.op==2&&MainActivity3.n==2)
        {
            fotox.setImageResource(R.drawable.carro3);
            dados.setText(MainActivity3.dadosx);
        }



    }
}