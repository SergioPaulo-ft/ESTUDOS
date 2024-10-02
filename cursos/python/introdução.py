is_python = "texto"
is_java = False

idade = int(23)
peso = int(67)
altura = float(1.70)

IMC = peso/altura**2

print(" idade:",idade," Peso:", peso, " Altura:", altura, " IMC:", IMC)

nome = input("Qual é seu nome: ")

print("ola", nome)

################################################

# CONDICIONAIS


Salario = float(input("informe o salário: "))

if Salario <= 3000:
    print("Programador Junior")
elif Salario > 3000 and Salario <=6000:
    print("Programador Pleno")
elif Salario > 6000 and Salario <=15000:
    print("Programador Senior")
else:
    print("Gerente de Projetos")

#Lista

lista_numeros = [18,21,22,23]
lista_numeros.append("Olá") #adiciona um valor no proximo indice 

print(lista_numeros)

# FOR
lista_vazia = [] 

for x in range(10):
    lista_vazia.append(x)

print(lista_vazia)

#####################################################
multiplica = []

for n in lista_vazia: #percorrendo uma lista
    multiplica.append(lista_vazia[n] * n)

print(multiplica)

# WHILE(enquanto)

contador = 1 

while contador < 10:
    contador += 1
print(contador)

# biblioteca(objetos)

banco = {
    "nome": "sergio",
    "idade": 18,
    "cargo": "Auxiliar de Produção"
}

print(banco["nome"],banco["idade"],"anos", banco["cargo"])


# Função 

def minha_funcao(valor1, valor2):
    return valor1+valor2

resposta = minha_funcao(10, 10)

print("resposta", resposta)



