import mysql from 'mysql';

export const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1234', // senha
    database: 'devFinance'
})

db.connect((err) => {
    if (err) {
      console.error('Erro de conexão: ' + err.stack);
      return;
    }
    console.log('Conectado como id ' + db.threadId);
  });


