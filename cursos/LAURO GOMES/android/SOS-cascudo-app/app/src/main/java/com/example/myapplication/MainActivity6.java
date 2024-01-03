package com.example.myapplication;

import android.content.Intent;
import android.os.Bundle;

import androidx.appcompat.app.AppCompatActivity;


public class MainActivity6 extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main6);
        findViewById(R.id.button6).setOnClickListener(v -> {

            Intent trocar = new Intent(MainActivity6.this, MainActivity7.class);
            MainActivity6.this.startActivity(trocar);

        });
    }
}