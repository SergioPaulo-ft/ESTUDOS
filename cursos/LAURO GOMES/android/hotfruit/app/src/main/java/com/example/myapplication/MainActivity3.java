package com.example.myapplication;

import android.content.Intent;
import android.media.Image;
import android.os.Bundle;
import android.view.View;
import android.widget.EditText;
import android.widget.ImageView;
import android.widget.TextView;
import android.widget.Toast;

import androidx.appcompat.app.AppCompatActivity;

public class MainActivity3 extends AppCompatActivity {
    public EditText txtcod3;
    public int j = 0, achou = 0;
    public static int i=0;

    @Override
    protected void onCreate(Bundle savedInstanceState){
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main3);
        txtcod3 = (EditText) findViewById(R.id.txtcod3);

        findViewById(R.id.btnpesquisar).setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                achou = 0;  // Reinicializa a variável achou antes de começar a busca
                        Intent t = new Intent(MainActivity3.this, MainActivity4.class);
                        MainActivity3.this.startActivity(t);
            }
        });
    }
}


