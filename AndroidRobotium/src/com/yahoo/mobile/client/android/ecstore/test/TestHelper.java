package com.yahoo.mobile.client.android.ecstore.test;

import android.view.Display;
import android.widget.EditText;
import com.robotium.solo.Solo;
import junit.framework.Assert;

public class TestHelper {


    @SuppressWarnings("deprecation")
	public static void swipeToLeft(Solo solo, int stepCount) {
        Display display = solo.getCurrentActivity().getWindowManager().getDefaultDisplay();
		int width = display.getWidth();
        int height = display.getHeight();
        float xStart = width - 10 ;
        float xEnd = 10;
        solo.drag(xStart, xEnd, height / 2, height / 2, stepCount);
    }
    @SuppressWarnings("deprecation")
    public static void swipeToRight(Solo solo, int stepCount) {
        Display display = solo.getCurrentActivity().getWindowManager().getDefaultDisplay();
        int width = display.getWidth();
        int height = display.getHeight();
        float xStart = 10 ;
        float xEnd = width - 10;
        solo.drag(xStart, xEnd, height / 2, height / 2, stepCount);
    }
    @SuppressWarnings("deprecation")
    public static void swipeDown(Solo solo, int stepCount) {
        Display display = solo.getCurrentActivity().getWindowManager().getDefaultDisplay();
        int width = display.getWidth();
        int height = display.getHeight();
        float yStart = height - 200 ;
        float yEnd = 200;
        solo.drag(width / 2, width / 2, yStart, yEnd, stepCount);
    }
    @SuppressWarnings("deprecation")
    public static void swipeUp(Solo solo, int stepCount) {
        Display display = solo.getCurrentActivity().getWindowManager().getDefaultDisplay();
        int width = display.getWidth();
        int height = display.getHeight();
        float yStart = height - 200 ;
        float yEnd =  200;
        solo.drag(width / 2, width / 2, yStart, yEnd, stepCount);
    }
}
