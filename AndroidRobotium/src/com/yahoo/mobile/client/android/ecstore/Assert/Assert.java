package com.yahoo.mobile.client.android.ecstore.Assert;

import android.content.Context;
import android.content.SharedPreferences;
import android.preference.PreferenceManager;
import android.view.View;
import android.view.inputmethod.InputMethodManager;

import com.robotium.solo.Solo;
import com.yahoo.mobile.client.android.ecstore.Action.Action;

public class Assert {
	
	//Check whether the application is first started.
	public static void testFirstLaunch(Solo solo) throws Exception{
		solo.sleep(3000);
		SharedPreferences prefs = PreferenceManager
				              .getDefaultSharedPreferences(solo.getCurrentActivity()); 
		boolean flag = prefs.getBoolean("Time", false);
		if (!flag) {	 
		    solo.sleep(3000);
			solo.clickOnView(solo.getView("welcome_skip"));
			solo.sleep(2000);
			solo.clickOnView(solo.getView("category_editor_ok_btn"));
			solo.sleep(2000);
			SharedPreferences.Editor editor = prefs.edit();
			editor.putBoolean("Time", true);
			editor.commit();	
			junit.framework.Assert.assertTrue("Not the first time launch app",true);

		}else{
			junit.framework.Assert.assertTrue("Not the first time launch app",true);

		}	
	}
	
	// check if soft keyboard is open
	public static void softKeyboardIsOpen(Solo solo) throws Exception{
			
		InputMethodManager imm = (InputMethodManager) 
					solo.getCurrentActivity().getSystemService(Context.INPUT_METHOD_SERVICE);
		junit.framework.Assert.assertTrue("Keyboard is inactive.",imm.isActive());
			
	}
	
	//check if navigate to search result page
	public static void navigateToResultPage(Solo solo) throws Exception{
		
		solo.waitForText("筆結果",1,3000);
		junit.framework.Assert.assertTrue("Failed to navigate to search result Screen",solo.searchText("商品")&&solo.searchText("商店"));
	}
	
	//
	public static void clearSuccess(Solo solo,String textviewid) throws Exception{
		
		String value_in_text=Action.getValuesInTextview(solo, textviewid);
		junit.framework.Assert.assertTrue("Clear input value failed.",value_in_text.length()==0);
		
	}
	
	 //check all Category item are show.
	 public static void CategoryListShow(Solo solo) throws Exception{
		 
	     String[] CategoryList = {"服飾","美妝","鞋包配飾","媽咪寶貝","電腦/週邊","家電/視聽","相機/\n手機/玩具",
	       "美食/\n保健/飲料","日用品/\n清潔/寵物","居家/\n寢具/傢俱","運動/\n戶外/休閒","圖書/\n文具/影音"};
	     int size = CategoryList.length;
	     for (int i=0; i<size; i++){
	    	 boolean textFound = solo.searchText(CategoryList[i]);
	         junit.framework.Assert.assertTrue(CategoryList[i] + " not found", textFound);
	       
	     }
	    
	 }
	 
	 // is 服飾L2層分類 list show
	 public static void costumeL2ListShow(Solo solo) throws Exception{
		 
		 String[] CostumeList = {"漢神百貨品牌服飾","漢神百貨內睡衣","流行女裝","中大尺碼女裝","女性內睡衣","品牌/潮流男裝"};
		 int size = CostumeList.length;
	     for (int i=0; i<size; i++)
	     {
	    	boolean textFound = solo.searchText(CostumeList[i]);
	    	junit.framework.Assert.assertTrue(CostumeList[i] + " not found", textFound);
	     }
	 }
	 
	 // is 流行女裝category  list show
	 public static void womenClothingCategoryListShow(Solo solo) throws Exception{
		 
		 String[] WomenClothing = {"上衣","外套/罩衫","背心/小可愛","洋裝","褲子","裙子","牛仔女裝","內搭褲","禮服"};
		 int size = WomenClothing.length;
	     for (int i=0; i<size; i++)
	     {
	    	boolean textFound = solo.searchText(WomenClothing[i]);
	    	junit.framework.Assert.assertTrue(WomenClothing[i] + " not found", textFound);
	     }
	 }
	 
	 
	 public static void noResultDisplay(Solo solo) throws Exception{
		 
		    solo.waitForText("筆結果",1,3000);
		    junit.framework.Assert.assertTrue("There have searched esults.",solo.searchText("很抱歉")); 
	 }
	 public static void navigateToSortTab(Solo solo) throws Exception{
		 
		 String[] CategoryList = {"相關度","最新上架","價錢低到高","價錢高到低"};
		 int size = CategoryList.length;
	 	 for (int i=0; i<size; i++)
	 	 	{
	 		 	boolean textFound = solo.searchText(CategoryList[i]);
	 		 	junit.framework.Assert.assertTrue(CategoryList[i] + " not found", textFound);
	     }
	 }
	 
     public static void navigateToFilterTab(Solo solo) throws Exception{
		 
    	 String[] CategoryList = {"可刷卡" ,"0利率","可分期","超商付款",  "有現貨", "有影音" ,"有圖片", "優良商店"};
    	 int size = CategoryList.length;
     	 for (int i=0; i<size; i++)
     	 	{
     		 	boolean textFound = solo.searchText(CategoryList[i]);
     		 	junit.framework.Assert.assertTrue(CategoryList[i] + " not found", textFound);
         }
	 }
     
    public static void checkFilterLayout(Solo solo) throws Exception{
		 
    	View ScrollBar = solo.getView("seekbar",0);
        View TableRowOne = solo.getView("tableRow1",0);
        View TableRowTwo = solo.getView("tableRow2",0);
        View TableRowThree = solo.getView("tableRow3",0); 
        solo.sleep(3000);
        boolean views = ScrollBar.isShown() && TableRowOne.isShown() && TableRowTwo.isShown()&& TableRowThree.isShown();
        junit.framework.Assert.assertTrue("views not found.",views);
	 }
}
