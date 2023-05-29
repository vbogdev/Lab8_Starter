// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2


//Phone number
test('checks if 898-425-1771 is a phone number', () => {
    expect(functions.isPhoneNumber("898-425-1771")).toBe(true);
});

test('checks if 121-322-1231 is a phone number', () => {
    expect(functions.isPhoneNumber("121-322-1231")).toBe(true);
});

test('checks if 8984251771 is not a phone number', () => {
    expect(functions.isPhoneNumber("8984251771")).toBe(false);
});

test('checks if 898-425-177122 is not a phone number', () => {
    expect(functions.isPhoneNumber("898-425")).toBe(false);
});


//EMAIL
test('test if vbogdev@ucsd.edu is a valid email', () => {
    expect(functions.isEmail("vbogdev@ucsd.edu")).toBe(true);
});

test('test if vasilbogdev@gmail.com is a valid email', () => {
    expect(functions.isEmail("vasilbogdev@gmail.com")).toBe(true);
});

test('test if vasilb is not a valid email', () => {
    expect(functions.isEmail("vasilb")).toBe(false);
});

test('test if 218-312-3218 is not a valid email', () => {
    expect(functions.isEmail("218-312-3218")).toBe(false);
});


//Password
test('Test if goodPassword is a good password', () => {
    expect(functions.isStrongPassword("goodPassword")).toBe(true);
});

test('Test if badPassword1 is a good password', () => {
    expect(functions.isStrongPassword("badPassword1")).toBe(true);
});

test('Test if "bad password" is a bad password', () => {
    expect(functions.isStrongPassword("bad password")).toBe(false);
});

test('Test if euiasdhaiusdhasuidhsakjda is a bad password', () => {
    expect(functions.isStrongPassword("euiasdhaiusdhasuidhsakjda")).toBe(false);
});


//DATE
test('Test if 5/28/2023 is a valid date', () => {
    expect(functions.isDate("5/28/2023")).toBe(true);
});

test('Test if 5/1/0001 is a valid date', () => {
    expect(functions.isDate("5/1/0001")).toBe(true);
});

test('Test if 5-28-999 is not a valid date', () => {
    expect(functions.isDate("5-28-9999")).toBe(false);
});

test('Test if 5 28 2023 is a valid date', () => {
    expect(functions.isDate("5 28 2023")).toBe(false);
});


//Hex color
test('Test if #FFFFFF is a valid hex color', () => {
    expect(functions.isHexColor("#FFFFFF")).toBe(true);
});

test('Test if #FFFFFF is a valid hex color', () => {
    expect(functions.isHexColor("#1F2A12")).toBe(true);
});

test('Test if #ZZZZZZ is a valid hex color', () => {
    expect(functions.isHexColor("#ZZZZZZ")).toBe(false);
});

test('Test if #FFFFFFFF is a valid hex color', () => {
    expect(functions.isHexColor("#FFFFFFFF")).toBe(false);
});