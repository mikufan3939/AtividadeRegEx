# AtividadeRegEx
Atividade de front end sobre validações com RegEx.

-RegEx para validação de nome com máximo de 100 caracteres e que não pode conter números:
  ^[A-Za-z\s]{1,100}$

  ^ e $ - denotam que a string inteira será checada, do inicío ao fim.
  [A-Za-z\s] - cada carácter da string apenas poderá ser uma letra do alfabeto romano maiúscula ou minúscula (A-Za-z) ou um espaço " ".
  {1,100} - a string poderá ter entre 1 e 100 caracteres.
