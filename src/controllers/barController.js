const pool = require('../config/db');

exports.createBar = async (req, res) => {
  const { nome, endereco, latitude, longitude } = req.body;

  try {
    const result = await pool.query(
      'INSERT INTO bares (nome, endereco, latitude, longitude) VALUES (?, ?, ?, ?)',
      [nome, endereco, latitude, longitude]
    );
    res.status(201).json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getBars = async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM bares');
    res.json(result.rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateBar = async (req, res) => {
  const { id } = req.params;
  const { nome, endereco } = req.body;

  try {
    const result = await pool.query(
      'UPDATE bares SET nome = ?, endereco = ? WHERE id = ?',
      [nome, endereco, id]
    );
    res.json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteBar = async (req, res) => {
  const { id } = req.params;

  try {
    await pool.query('DELETE FROM bares WHERE id = $1', [id]);
    res.json({ message: 'Bar removido com sucesso' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};