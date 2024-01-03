package com.example.myapplication;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.EditText;
import android.widget.RadioButton;
import android.widget.Toast;

public class MainActivity extends AppCompatActivity {
public EditText txtlogin, txtsenha;
public RadioButton op1,op2;
public static String[] login = new String[100];
public static String[] senha = new String[100];
public static int i=0;
public int achou=0;
public int j=0;
public static String senhax;
public static String[] status = new String[100];
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        txtlogin=(EditText) findViewById(R.id.txtlogin);
        txtsenha=(EditText) findViewById(R.id.txtsenha);
        op1=(RadioButton)findViewById(R.id.op1);
        op2=(RadioButton)findViewById(R.id.op2);
        findViewById(R.id.button).setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
            login[i]=txtlogin.getText().toString();
            senha[i]=txtsenha.getText().toString();
            if(op1.isChecked()){
                status[i] = "funcionario";
            }else{
                status[i] = "usuario";
            }

                Toast.makeText(getApplicationContext(),  "REGISTRO INCLUIDO",
                        Toast.LENGTH_LONG).show();
                i++;


            }
        });


findViewById(R.id.button2).setOnClickListener(new View.OnClickListener() {
    @Override
    public void onClick(View v) {
achou=0;
for(j=0;j!=i;j++) {
    if(txtlogin.getText().toString().equals(login[j]) && txtsenha.getText().toString().equals(senha[j])&& status[j].equals("funcionario"))
        {
            senhax=txtsenha.getText().toString();
            achou=1;

              Intent t=new Intent(MainActivity.this,MainActivity2.class);
              MainActivity.this.startActivity(t);

    }
    if(txtlogin.getText().toString().equals(login[j]) && txtsenha.getText().toString().equals(senha[j])&& status[j].equals("usuario"))
    {
        senhax=txtsenha.getText().toString();
        achou=1;

        Intent t=new Intent(MainActivity.this,MainActivity3.class);
        MainActivity.this.startActivity(t);
    }


}
if(achou==0)
{
    Toast.makeText(getApplicationContext(),  "RM OU SENHA INVALIDA",
            Toast.LENGTH_LONG).show();
}
    }
});

    }
}