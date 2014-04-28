package com.yahoo.mobile.client.android.ecstore.test;

import java.util.ArrayList;

import android.content.Context;
import android.test.ActivityInstrumentationTestCase2;
import android.view.KeyEvent;
import android.view.inputmethod.InputMethodManager;
import android.widget.GridView;
import android.widget.ListView;

import com.robotium.solo.Solo;
import com.yahoo.mobile.client.android.ecstore.Action.Action;
import com.yahoo.mobile.client.android.ecstore.Assert.Assert;
import com.yahoo.mobile.client.android.ecstore.test.TestHelper;

@SuppressWarnings({ "unchecked", "rawtypes" })
public class SRP extends ActivityInstrumentationTestCase2 {
	private static final String LAUNCHER_ACTIVITY_FULL_CLASSNAME = "com.yahoo.mobile.client.android.ecstore.ui.ECSplashActivity";
	private static Class launcherActivityClass;
    private Solo solo;
    static {
    	
    	try {
    		  launcherActivityClass = Class.forName(LAUNCHER_ACTIVITY_FULL_CLASSNAME);
		    } 
    	catch (ClassNotFoundException e) 
		    {
			   throw new RuntimeException(e);
			}
    	
       }
    public SRP() throws ClassNotFoundException {
    	super(launcherActivityClass);
    }

    @Override
    protected void setUp() throws Exception {
    	super.setUp();
    	solo = new Solo(getInstrumentation(), getActivity());
        
    }
    
    @Override
    public void tearDown() throws Exception {

        solo.finishOpenedActivities();
        super.tearDown();
    }

    //1937918:check 'Tab' display.
    public void testTabDisplay() throws Exception{
    	
    	//clear history information then back to home screen
	    Action.clearHistoryInfomation(solo);
	
	    // navigate to category screen
	    Action.navigateToCategoryScreen(solo);
	    
	    //click search button
	    Action.clickSearchButtonOnScreen(solo);
	    
	    //input keyword and search
	    Action.addInitializeData(solo, 0, "上衣");
	    solo.pressSoftKeyboardSearchButton();
	    solo.sleep(3000);
	    
	    assertTrue("Goods or stores is not display.",solo.searchText("商品")&&solo.searchText("商店"));
	    
    }
    
     //1937919:Default to choose “商品” Tab.
    public void testDefaultTab() throws Exception{
    	
    	//clear history information then back to home screen
	    Action.clearHistoryInfomation(solo);
	
	    // navigate to category screen
	    Action.navigateToCategoryScreen(solo);
	    
	    //click search button
	    Action.clickSearchButtonOnScreen(solo);
	    
	    //input keyword and search
	    Action.addInitializeData(solo, 0, "上衣");
	    solo.pressSoftKeyboardSearchButton();
	    solo.sleep(3000);

	    assertTrue("Goods tab is not selected.",Action.getIsViewShown(solo, "id/star_button"));
	    
    }
    
    //1937920:Navigate to store tab.
    public void testStoreTab() throws Exception{
    	
    	//clear history information then back to home screen
	    Action.clearHistoryInfomation(solo);
	
	    // navigate to category screen
	    Action.navigateToCategoryScreen(solo);
	    
	    //click search button
	    Action.clickSearchButtonOnScreen(solo);
	    
	    //input keyword and search
	    Action.addInitializeData(solo, 0, "上衣");
	    solo.pressSoftKeyboardSearchButton();
	    solo.sleep(3000);
	    
	    solo.clickOnText("商店");
	    solo.sleep(3000);

	    assertTrue("Store tab is not selected.",Action.getIsViewShown(solo, "id/heart_button"));
	    
    }
    
  //1937920:go back to goods tab.
    public void testBackToGoodsTab() throws Exception{
    	
    	//clear history information then back to home screen
	    Action.clearHistoryInfomation(solo);
	
	    // navigate to category screen
	    Action.navigateToCategoryScreen(solo);
	    
	    //click search button
	    Action.clickSearchButtonOnScreen(solo);
	    
	    //input keyword and search
	    Action.addInitializeData(solo, 0, "上衣");
	    solo.pressSoftKeyboardSearchButton();
	    solo.sleep(3000);
	    
	    solo.clickOnText("商店");
	    solo.sleep(3000);
	    
	    solo.clickOnText("商品");
	    solo.sleep(3000);

	    assertTrue("Store tab is not selected.",Action.getIsViewShown(solo, "id/star_button"));
	    
    }
    
    //1937927:default show 20 items.
    public void testDefaultDisplay20Items() throws Exception{
    	
    	//clear history information then back to home screen
	    Action.clearHistoryInfomation(solo);
	
	    // navigate to category screen
	    Action.navigateToCategoryScreen(solo);
	    
	    //click search button
	    Action.clickSearchButtonOnScreen(solo);
	    
	    //input keyword and search
	    Action.addInitializeData(solo, 0, "上衣");
	    solo.pressSoftKeyboardSearchButton();
	    solo.sleep(3000);
	    
	    GridView gv=(GridView)solo.getView("id/gridview");
	    
	    //default count is 20
	    assertEquals("Store tab is not selected:",gv.getCount(),21);
	    
    }
    
    //1937928:Load more items.
    public void testLoadMoreItems() throws Exception{
    	
    	//clear history information then back to home screen
	    Action.clearHistoryInfomation(solo);
	
	    // navigate to category screen
	    Action.navigateToCategoryScreen(solo);
	    
	    //click search button
	    Action.clickSearchButtonOnScreen(solo);
	    
	    //input keyword and search
	    Action.addInitializeData(solo, 0, "上衣");
	    solo.pressSoftKeyboardSearchButton();
	    solo.sleep(3000);
	    
	    //swipe 4 times
	    for(int k=0;k<4;k++){
	    	TestHelper.swipeDown(solo, 1);}
	    
	    // get the numbers of grid view
	    GridView gv=(GridView)solo.getView("id/gridview");
	    int gv_count=gv.getCount();
	 
	    assertTrue("Store tab is not selected:",gv_count>21);
	    
    }
    
    //1937933: display sort tab
    public void testNavigateToSortTab() throws Exception{
    	
    	//clear history information then back to home screen
	    Action.clearHistoryInfomation(solo);
	
	    // navigate to category screen
	    Action.navigateToCategoryScreen(solo);
	    
	    //click search button
	    Action.clickSearchButtonOnScreen(solo);
	    
	    //input keyword and search
	    Action.addInitializeData(solo, 0, "上衣");
	    solo.pressSoftKeyboardSearchButton();
	    
	    //navigate to Advanced screen
	    Action.enterAdvancedPage(solo);
	    
	    //check if go to sort screen
	    Assert.navigateToSortTab(solo);
	    
    }
    
    //1937934: display Filter tab
    public void testNavigateToFilterTab() throws Exception{
    	
    	//clear history information then back to home screen
	    Action.clearHistoryInfomation(solo);
	
	    // navigate to category screen
	    Action.navigateToCategoryScreen(solo);
	    
	    //click search button
	    Action.clickSearchButtonOnScreen(solo);
	    
	    //input keyword and search
	    Action.addInitializeData(solo, 0, "上衣");
	    solo.pressSoftKeyboardSearchButton();
	    
	    //navigate to Filter screen
	    Action.enterAdvancedSortPage(solo);
	    
	    //check if go to filter screen
	    Assert.navigateToFilterTab(solo);
	    
    }
    
  //1937935: check sort tab items
    public void testCheckSortTabItems() throws Exception{
    	
    	//clear history information then back to home screen
	    Action.clearHistoryInfomation(solo);
	
	    // navigate to category screen
	    Action.navigateToCategoryScreen(solo);
	    
	    //click search button
	    Action.clickSearchButtonOnScreen(solo);
	    
	    //input keyword and search
	    Action.addInitializeData(solo, 0, "上衣");
	    solo.pressSoftKeyboardSearchButton();
	    
	    //navigate to Advanced screen
	    Action.enterAdvancedPage(solo);
	    
	    //check sort table items
	    Assert.navigateToSortTab(solo);
	    
    }
    
    //1937940: check Layout 
    public void testCheckLayoutOfFilterTab() throws Exception{
    	
    	//clear history information then back to home screen
	    Action.clearHistoryInfomation(solo);
	
	    // navigate to category screen
	    Action.navigateToCategoryScreen(solo);
	    
	    //click search button
	    Action.clickSearchButtonOnScreen(solo);
	    
	    //input keyword and search
	    Action.addInitializeData(solo, 0, "上衣");
	    solo.pressSoftKeyboardSearchButton();
	    
	    //navigate to Filter screen
	    Action.enterAdvancedSortPage(solo);
	    
	    //check if go to filter screen
	    Assert.checkFilterLayout(solo);
	    
    }

    
}