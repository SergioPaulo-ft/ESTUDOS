package com.example.myapplication;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.EditText;
import android.widget.TextView;

public class MainActivity extends AppCompatActivity {
private EditText txtnome;
public static String nomex;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        txtnome=(EditText) findViewById(R.id.txtnome);
        findViewById(R.id.button).setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                nomex=txtnome.getText().toString();

                Intent trocar=new Intent(MainActivity.this,MainActivity2.class);
                MainActivity.this.startActivity(trocar);


            }
        });


    }
}