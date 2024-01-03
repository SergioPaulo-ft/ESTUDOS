package com.example.myapplication;

import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;
import android.view.View;
import android.widget.CheckBox;
import android.widget.EditText;
import android.widget.ImageView;
import android.widget.TextView;

public class MainActivity3 extends AppCompatActivity {
private EditText txtquant;
private TextView lbltotal;
private CheckBox cbxcaixa;
private double total=0;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main3);
txtquant=(EditText)findViewById(R.id.txtquant);
lbltotal=(TextView) findViewById(R.id.lbltotal);
cbxcaixa=(CheckBox) findViewById(R.id.cbxcaixa);
findViewById(R.id.button3).setOnClickListener(new View.OnClickListener() {
    @Override
    public void onClick(View v) {
        total=Double.parseDouble(MainActivity.precox)*
                Double.parseDouble(txtquant.getText().toString());
        if(cbxcaixa.isChecked()==true)
        {
            total=total+5;
        }
        lbltotal.setText(total+"");
    }
});
    }
}