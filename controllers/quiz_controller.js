// GET /quizes/question
exports.question = function(req, res) {
  res.render('quizes/quiestion', {pregunta: 'Capital de Italia'});
};
// GET /quizes/answer
exports.answer = function(req, res) {
if(req.querry.respuesta === 'Roma'){
res.render('quizes/answer', {respuesta: 'Correcto'});
} else {
res.render('quizes/answer', {respuesta: 'Incorrecto'});
}
};
