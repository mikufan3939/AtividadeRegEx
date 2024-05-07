# AtividadeRegEx
Atividade de front end sobre validações com RegEx.<br /><br />

-RegEx para validação de nome com máximo de 100 caracteres e que não pode conter números:<br />
  ^[A-Za-z\s]{1,100}$<br />

  ^ e $ - denotam que a string inteira será checada, do inicío ao fim.<br />
  [A-Za-z\s] - cada carácter da string apenas poderá ser uma letra do alfabeto romano maiúscula ou minúscula (A-Za-z) ou um espaço " ".<br />
  {1,100} - a string poderá ter entre 1 e 100 caracteres.<br />

-RegEx para validação de email:<br />
  ^[^@]+@[^@]+\.[^@]+$<br />

^ e $ - denotam que a string inteira será checada, do inicío ao fim.<br />
 [^@] - a string irá começar com caracteres que não são o "@".<br />
 +@[^@] - seguido por um "@" e mais caracteres que não são o "@".<br />
+\.[^@] - seguido por um "." ("\" denota uso literal) e mais caracteres que não são o "@".<br />

-RegEx para validação de telefone:<br />
  ^\({1}[0-9]{2}\){1}[0-9]{4,5}-{1}[0-9]{4}$

  ^ e $ - denotam que a string inteira será checada, do inicío ao fim.<br />
  \({1}[0-9]{2} - a string irá começar com 1 "(" ("\" denota uso literal) e 2 números de [0-9].
  \){1}[0-9]{4,5} - seguido por 1 ")" ("\" denota uso literal) e 4 ou 5 números de [0-9].
  -{1}[0-9]{4} - seguido por 1 "-" e 4 números de [0-9].
