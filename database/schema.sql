-- Table for posts
CREATE TABLE posts (
  id INT PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR(255),
  content TEXT,
  author_id INT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (author_id) REFERENCES authors(id)
);

-- Table for authors
CREATE TABLE authors (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(255)
);
