CREATE DATABASE home_library;
CREATE TABLE books(
                      book_id SERIAL PRIMARY KEY,
                      title VARCHAR(255),
                      description TEXT,
                      image TEXT,
                      author VARCHAR(255),
                      borrowed BOOLEAN,
                      borrowed_person VARCHAR(255)
);