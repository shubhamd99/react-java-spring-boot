package com.rest.webservices.restfulservices;

public class HelloWorldBean {

	private String message;

    public HelloWorldBean(String message) {
        this.message = message;
    }

    public String getMessage() {
        return message;
    }
    
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
