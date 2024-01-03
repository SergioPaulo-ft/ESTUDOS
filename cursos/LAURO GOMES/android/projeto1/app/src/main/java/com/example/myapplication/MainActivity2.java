package com.example.myapplication;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.ImageView;
import android.widget.TextView;

public class MainActivity2 extends AppCompatActivity {
private TextView lblcod;
private TextView lblnome;
private ImageView foto;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main2);
        lblcod=(TextView) findViewById(R.id.lblcod);
        lblnome=(TextView) findViewById(R.id.lblnome);
        lblcod.setText(MainActivity.codx);
        lblnome.setText(MainActivity.nomex+"");
        foto=(ImageView) findViewById(R.id.foto);
        if(MainActivity.nomex.equals("pera"))
        {
            foto.setImageResource(R.drawable.pera);
              }
        else
        if(MainActivity.nomex.equals("abacaxi"))
        {
            foto.setImageResource(R.drawable.abacaxi);
        }
        else
        if(MainActivity.nomex.equals("abacate"))
        {
            foto.setImageResource(R.drawable.abacate);
        }
        else
        {
            foto.setImageResource(R.drawable.vazio);
        }
findViewById(R.id.button2).setOnClickListener(new View.OnClickListener() {
    @Override
    public void onClick(View v) {
        Intent trocar=new Intent(MainActivity2.this,MainActivity3.class);
        MainActivity2.this.startActivity(trocar);
    }
});
    }
}