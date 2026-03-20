package com.tek.thread.race.condition;

public class Counter {

    int Count = 0;

    // synchronized method to prevent race condition
    public synchronized void increment() {
        Count++;
    }
}