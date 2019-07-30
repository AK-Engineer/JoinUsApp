--Step 4: Create The Users Table
CREATE TABLE users (
    email VARCHAR(255) PRIMARY KEY,
    created_at TIMESTAMP DEFAULT NOW()
);

-- Test query
INSERT INTO users (email) VALUES('Katie34@yahoo.com'), ('Tunde@gmail.com');
SELECT * FROM users;