package com.example.myapplication; 

// responsavel pela compatibilidade com as versões mais antigas do android
import androidx.appcompat.app.AppCompatActivity;

// aqui estão sendo importadas as classes indicando o tipo 'EditText' e 'TextView' 
import android.content.Intent; // Intent: "intenções"
import android.os.Bundle; // Bundle: "pacotes"
import android.view.View; 
import android.widget.EditText; 
import android.widget.TextView; 

// Define a classe MainActivity que estende AppCompatActivity
// Aqui é o corpo de todo o codigo 
public class MainActivity extends AppCompatActivity { 

// No 'private' sao criadas todas as variaveis de entrada referenciando o id usado no layout
// e indicando se ela é do tipo EditText, double ou TextView
private EditText txtnome;
private EditText txtcod; ;
private TextView lblmostra; 
private EditText txtpreco; 

//cria uma variavel vazia que sera usada futuramente no evento onclick
private  double total=0; 

// O'public' cria uma string publica e estatica 
// No caso essas variaveis publicas sao codx,nomex e precox
public static String codx,nomex, precox; 

    //Criando a atividade  como metodo onCreate
    @Override 
    protected void onCreate(Bundle savedInstanceState) { 
        super.onCreate(savedInstanceState); 
        setContentView(R.layout.activity_main); 

        //Inicializando as variaveis referenciadas pelo id
        txtcod=(EditText) findViewById(R.id.txtcod);
        txtnome=(EditText) findViewById(R.id.txtnome); 
        lblmostra=(TextView) findViewById(R.id.lblmostra); 
        txtpreco=(EditText) findViewById(R.id.txtpreco);  

        //Executa um evento setOnClickListener ao ativar o botão 
        findViewById(R.id.button).setOnClickListener(new View.OnClickListener()
        { 
            //Inicio do metodo onClick
            @Override 
            public void onClick(View v)  
            {   
                // calcula o preço uma compra 
                // usa uma variavel vazia chamada total para somar com o preço inserido no txtpreco
                // parseDouble esta convertendo txtpreco em numero
                total=total+Double.parseDouble(txtpreco.getText().toString()); 

                // Atualiza o lblmostra usando o setText para inserir o valor total da compra  
                lblmostra.setText("TOTAL A PAGAR  "+ total);

                //Essas linhas obtêm as entrada de texto e as armazenam nas respectivas variáveis de String estáticas
                //usando o getText e toString para pegar valor em string
                codx=txtcod.getText().toString(); 
                nomex=txtnome.getText().toString();
                precox=txtpreco.getText().toString();
 
                // cria um link para chamar o MainActivity2
                Intent trocar=new Intent(MainActivity.this,MainActivity2.class); 

                // faz um transição do MainActivity para o MainActivity2
                MainActivity.this.startActivity(trocar); 
 
 
            } 
        }); 
 
 
    } 
} 



















package com.example.myapplication; 

// responsavel pela compatibilidade com as versões mais antigas do android
import androidx.appcompat.app.AppCompatActivity;

// aqui estão sendo importadas as classes indicando o tipo 'EditText' e 'TextView' 
import android.content.Intent; // Intent: "intenções"
import android.os.Bundle; // Bundle: "pacotes"
import android.view.View; 
import android.widget.ImageView; 
import android.widget.TextView; 

// Define a classe MainActivity2 que estende AppCompatActivity
// Aqui é o corpo de todo o codigo  
public class MainActivity2 extends AppCompatActivity { 

// No 'private' sao criadas todas as variaveis de entrada referenciando o id usado no layout
// e indicando se ela é do tipo TextView ou ImageView
private TextView lblcod; 
private TextView lblnome; 
private ImageView foto; 

    //Criando a atividade  como metodo onCreate
    @Override 
    protected void onCreate(Bundle savedInstanceState) { 
        super.onCreate(savedInstanceState); 
        setContentView(R.layout.activity_main2); 

        //Inicializando as variaveis referenciadas pelo id
        lblcod=(TextView) findViewById(R.id.lblcod); 
        lblnome=(TextView) findViewById(R.id.lblnome); 

        //inserindo o texto no lblcod e lblnome
        //Esses serao o codigo e nome inseridos
        lblcod.setText(MainActivity.codx); 
        lblnome.setText(MainActivity.nomex+"");

        //usando o id "foto" é inicializado a variavel "foto" do tipo ImageView
        foto=(ImageView) findViewById(R.id.foto);

        //Define a imagem exibida com base no valor de MainActivity.nomex 
        if(MainActivity.nomex.equals("pera"))
        { 
            foto.setImageResource(R.drawable.pera); //imagem da pera
              } 
        else 
        if(MainActivity.nomex.equals("abacaxi"))
        { 
            foto.setImageResource(R.drawable.abacaxi); //imagem do bacaxi
        } 
        else 
        if(MainActivity.nomex.equals("abacate"))
        { 
            foto.setImageResource(R.drawable.abacate); //imagem do abacate
        } 
        else 
        { 
            foto.setImageResource(R.drawable.vazio); // vazia
        } 
 
        //Cria um evento de onClick pra o button2
        findViewById(R.id.button2).setOnClickListener(new View.OnClickListener() { 
            @Override 
            public void onClick(View view) { 
                //criando link para o MainActivity3
                Intent trocar= new Intent(MainActivity2.this,MainActivity3.class); 

                //Transição do MainActivity2 para o MainActivity3
                MainActivity2.this.startActivity(trocar);
 
            } 
        }); 
 
 
 
    } 
} 



package com.example.myapplication; 

// responsavel pela compatibilidade com as versões mais antigas do android
import androidx.appcompat.app.AppCompatActivity; 
 
// aqui estão sendo importadas as classes indicando o tipo 'EditText', 'TextView', 'CheckBox' e 'ImageView'
import android.os.Bundle; 
import android.view.View; 
import android.widget.CheckBox; 
import android.widget.EditText; 
import android.widget.ImageView; 
import android.widget.TextView; 

// Define a classe MainActivity3 que estende AppCompatActivity
// Aqui é o corpo de todo o codigo 
public class MainActivity3 extends AppCompatActivity { 

// No 'private' sao criadas todas as variaveis de entrada referenciando o id usado no layout
// e indicando se ela é do tipo EditText, double, TextView e CheckBox
private EditText txtquant; 
private TextView lbltotal; 
private CheckBox cbxcaixa; 

//cria uma variavel vazia que sera usada futuramente no evento onclick
private double total= 0; 

    //Criando a atividade  como metodo onCreate
    @Override 
    protected void onCreate(Bundle savedInstanceState) { 
        super.onCreate(savedInstanceState); 
        setContentView(R.layout.activity_main3); 
 
        //Inicializando as variaveis referenciadas pelo id
        txtquant=(EditText) findViewById(R.id.txtquant); 
        lbltotal=(TextView) findViewById(R.id.lbltotal); 
        cbxcaixa=(CheckBox) findViewById(R.id.cbxcaixa); 
 
        //Executa um evento setOnClickListener ao ativar o botão 
        findViewById(R.id.button3).setOnClickListener(new View.OnClickListener(){ 
            
            //Inicio do metodo onClick
            @Override 
            public void onClick(View view) { 
            
                //Calcula o preço total de uma compra considerando a quantidade e o valor do produto
                //Multiplica o preço do produto "MainActivity.precox" com a quantidade "txtquant"
                //parseDouble esta convertendo txtpreco em numero
                total= Double.parseDouble(MainActivity.precox)* Double.parseDouble(txtquant.getText().toString());

                //Se o checkbox estiver ativado ele soma o total ao preço da caixa 
                if(cbxcaixa.isChecked()==true){ 
                    total = total + 5; 
                } 

                //Mostra ao usuario o preço total calculado 
                //O valor estara dentro de um TextView criado anteriormente chamado lbltotal 
                lbltotal.setText(total+""); 

            } 
        }); 
 
    } 
} 
