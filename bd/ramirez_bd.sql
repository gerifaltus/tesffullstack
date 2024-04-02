CREATE DATABASE IF NOT EXISTS bd_ramirez;

USE bd_ramirez;

CREATE TABLE IF NOT EXISTS person (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    apellido VARCHAR(100) NOT NULL,
    fecha_nacimiento DATE,
    puesto VARCHAR(100),
    sueldo DECIMAL(10, 2)
);

CREATE USER 'conexion'@'localhost' IDENTIFIED BY 'pru3b4#2024';
GRANT ALL PRIVILEGES ON bd_ramirez.* TO 'conexion'@'localhost';
FLUSH PRIVILEGES;