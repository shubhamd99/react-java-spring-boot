package com.rest.webservices.restfulservices;

public class HelloWorldBean {

	private String message;

    public HelloWorldBean(String message) {
        this.message = message;
    }

    // getters are used to get the values of the private variable
    public String getMessage() {
        return message;
    }
    
    // setters are used to set the values of the private variable
    public void setMessage(String message) {
        this.message = message;
    }

    // Overriding is a feature that allows a subclass or child class to provide a specific implementation
    // We are overriding method of the parent class
    @Override
    public String toString() {
        return String.format("Hello WorldBean [message=%s]", message);
    }

}
