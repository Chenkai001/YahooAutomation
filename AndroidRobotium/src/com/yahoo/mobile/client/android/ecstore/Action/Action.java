package com.yahoo.mobile.client.android.ecstore.Action;

import java.util.ArrayList;

import android.content.Context;
import android.view.View;
import android.view.inputmethod.InputMethodManager;
import android.widget.ImageView;
import android.widget.ListView;
import android.widget.TextView;

import com.robotium.solo.Solo;
import com.yahoo.mobile.client.android.ecstore.Assert.Assert;

public class Action {
	
	//clear history information then navigate to main screen
	public static void clearHistoryInfomation(Solo solo)throws Exception{
		
		//Go to main screen
		solo.waitForActivity("ECStoreActivity",2000);
		solo.waitForText("最新動態",1,3000);
		junit.framework.Assert.assertTrue("Navigate to main screen failed.",solo.searchText("最新動態"));
		//click on up icon
		solo.sleep(3000);
		clickHomeButtonOnScreen(solo);
		
		//clear history information and back
		solo.waitForText("設定",1,3000);
		solo.clickOnText("設定");
		solo.waitForText("清除搜尋記錄",1,3000);
		solo.clickOnText("清除搜尋記錄");
	    solo.clickOnView(solo.getView("id/button1"));
	    solo.clickOnView(solo.getView("id/home"));//id/home 1
	    solo.sleep(3000);

	}
	
	//go to advanced screen.
	public static void enterAdvancedPage(Solo solo){
		solo.waitForText("商品", 1, 3000);
		solo.clickOnText("商品");
		solo.clickOnView(solo.getView("menu_filter"));
			
	}
		
	//go to advanced sort screen.
	public static void enterAdvancedSortPage(Solo solo){
		solo.waitForText("商品", 1, 3000);
		solo.clickOnText("商品");
		solo.clickOnView(solo.getView("menu_filter"));
		solo.sleep(3000);
		solo.clickOnView(solo.getView("btn_filter"));
			
	}
		
	//go to main screen and click search icon
	public static void clickSearchButtonOnScreen(Solo solo)throws Exception{
		
		View iv=solo.getView("id/menu_search",0);
		solo.clickOnView(iv);
		solo.sleep(3000);
		
	}
	
	public static void clickHomeButtonOnScreen(Solo solo)throws Exception{
		
		View iv=solo.getView("id/home");
		solo.clickOnView(iv);
		solo.sleep(3000);
		
	}
	
	//add data in textview
	public static void addInitializeData(Solo solo,int textview_id,String data) throws Exception{
		
		solo.enterText(textview_id, data);
		solo.sleep(3000);
	}
	
	//Navigate to category screen
	public static void navigateToCategoryScreen(Solo solo) throws Exception{
		
		
		solo.clickOnView(solo.getView("id/tab_text",2));
		solo.clickOnText("全部分類");
		com.yahoo.mobile.client.android.ecstore.Assert.Assert.CategoryListShow(solo);
		
	}
	
	public static int getListviewOnCurrentScreen(Solo solo) throws Exception{
		
		 ArrayList<ListView> listview=solo.getCurrentViews(ListView.class);
		 int count=listview.size();
		 return count;
	}
	
	//click plus in open window
	public static void clickPlusInOpenWindow(Solo solo, String viewid, int plusid) throws Exception{
		
		solo.sleep(3000);
		View view =solo.getView(viewid,plusid);
		ImageView imageview=(ImageView)view;
		solo.clickOnView(imageview);
		solo.sleep(3000);
		
	}
	
	//return value in textview
	public static String getValuesInTextview(Solo solo,String textviewid) throws Exception{
		
		solo.sleep(3000);
		View view =solo.getView(textviewid);
		if (view==null)
			return "";
		TextView testview=(TextView)view;
		return testview.getText().toString();
		
	}
	
	//return value in textview,multi-same  textview
	public static String getValuesInTextview(Solo solo,String textviewid,int v_id) throws Exception{
			
		View view =solo.getView(textviewid,v_id);
		if (view==null)
			return "";
		TextView testview=(TextView)view;
		return testview.getText().toString();
			
	}
	
	// is view shown
	public static boolean getIsViewShown(Solo solo,String viewid)throws Exception{
		
		View view=solo.getView(viewid,0);
		if (view==null)
			return false;
		return view.isShown();
	}
	
	// is view shown
	public static boolean getIsViewShown(Solo solo,String viewid,int id)throws Exception{
		
		View view=solo.getView(viewid,id);
		if (view==null)
			return false;
		return view.isShown();
					
	}
	//click view
	public static void clickView(Solo solo,String viewid) throws Exception{
		
		View view=solo.getView(viewid);
		solo.clickOnView(view);
		solo.sleep(3000);
		
	}
	//click view
    public static void clickView(Solo solo,String viewid, int id) throws Exception{
		
		View view=solo.getView(viewid,id);
		solo.clickOnView(view);
		solo.sleep(3000);
		
	}
    //click text
    public static void clickText(Solo solo,String text)throws Exception{
    	
    	solo.waitForText(text,1,3000);
    	solo.clickOnText(text);
    	solo.sleep(3000);
    	
    }
    
    // add history information in search bar
    public static void addHistoryInfomationInSearchBar(Solo solo,String[] searchKeys)throws Exception{
    	
    	int searchKeys_Length=searchKeys.length;
 	    for(int i=0;i<searchKeys_Length;i++){
 	    	
 	    	// click on search button on home screen
 		    Action.clickSearchButtonOnScreen(solo);
 	    	
 	    	// input key to search
 	    	Action.addInitializeData(solo, 0, searchKeys[i]);
 	    	solo.pressSoftKeyboardSearchButton();
 	    	solo.sleep(3000);
 	    	 
 	    	//click back button if go to result screen
 	    	Assert.navigateToResultPage(solo);
 	    	Action.clickHomeButtonOnScreen(solo);
 	    }
    	
    }
    
    public static void softKeyBoardHideOrOpen(Solo solo) throws Exception{
    	// close soft keyboard
	    InputMethodManager imm = (InputMethodManager) 
	    		solo.getCurrentActivity().getSystemService(Context.INPUT_METHOD_SERVICE);  
	    imm.toggleSoftInput(0, InputMethodManager.HIDE_NOT_ALWAYS);
    }

 

}
