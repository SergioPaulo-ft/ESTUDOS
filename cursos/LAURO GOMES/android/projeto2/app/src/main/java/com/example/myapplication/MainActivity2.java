package com.example.myapplication;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.RadioButton;

public class MainActivity2 extends AppCompatActivity {
private RadioButton rd1;
private RadioButton rd2;
public static int op=0;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main2);
        rd1=(RadioButton) findViewById(R.id.rd1);
        rd2=(RadioButton) findViewById(R.id.rd2);
        findViewById(R.id.button2).setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                if(rd1.isChecked()==true)
                {
                    op=1;
                }
                if(rd2.isChecked()==true)
                {
                    op=2;
                }
                Intent trocar=new Intent(MainActivity2.this,MainActivity3.class);
                MainActivity2.this.startActivity(trocar);
            }
        });
    }
}