package com.tek.thread.race.condition;

public class Worker extends Thread {
    Counter counter;

    public Worker(String name, Counter counter) {
        super(name);
        this.counter = counter;
    }

    @Override
    public void run() {
        for (int num = 0; num < 20; num++) {
            counter.increment();
        }
    }
}