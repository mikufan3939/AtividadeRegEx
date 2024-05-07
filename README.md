# AtividadeRegEx
Atividade de front end sobre validações com RegEx.<br /><br />

-RegEx para validação de nome com máximo de 100 caracteres e que não pode conter números:<br />
  ^[A-Za-z\s]{1,100}$<br />

  ^ e $ - denotam que a string inteira será checada, do inicío ao fim.<br />
  [A-Za-z\s] - cada carácter da string apenas poderá ser uma letra do alfabeto romano maiúscula ou minúscula (A-Za-z) ou um espaço " ".<br />
  {1,100} - a string poderá ter entre 1 e 100 caracteres.<br />
