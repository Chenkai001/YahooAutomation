package com.yahoo.mobile.client.android.ecstore.test;

 
import android.test.ActivityInstrumentationTestCase2;
import android.util.Log;
import android.view.View;
import android.widget.Button;
import android.widget.GridView;
import android.widget.ListView;
import android.widget.TextView;
import android.widget.ToggleButton;

import com.robotium.solo.Solo;
import com.yahoo.mobile.client.android.ecstore.Account.Account;
import com.yahoo.mobile.client.android.ecstore.Action.Action;
import com.yahoo.mobile.client.android.ecstore.Assert.Assert;

@SuppressWarnings("rawtypes")
public class Category extends ActivityInstrumentationTestCase2 {
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

	@SuppressWarnings("unchecked")
	public Category() throws ClassNotFoundException {
		super(launcherActivityClass);
	}

	@Override
	protected void setUp() throws Exception {
		solo = new Solo(getInstrumentation(), getActivity());
		Assert.testFirstLaunch(solo);
	}

	@Override
	public void tearDown() throws Exception {
  
			solo.finishOpenedActivities();
			 
	}
	
	
	
	
	//Go to clothes page.
	public void enterClassification() throws Exception{
		
		solo.waitForActivity("ECSplashActivity", 3000);
		solo.waitForText("全部分類", 1, 3000);
		solo.clickOnText("全部分類");
		solo.waitForText("服飾", 1, 3000);
		solo.clickOnText("服飾");
		
	}
	
   	//1938037:Check back function.
	public void testBackFunction() throws Exception{
		
		enterClassification();
		solo.clickOnView(solo.getView("up",0));//Tap back key
		solo.sleep(3000);
		Assert.CategoryListShow(solo);
		 
	}
	
	//1938041:Check tab display.
	public void testTab() throws Exception{
	 
	 	enterClassification();
		String[] CategoryList = {"分類","商品"};
    	int size = CategoryList.length;
    	for (int i=0; i<size; i++)
        {
    		boolean textFound = solo.searchText(CategoryList[i]);
    		assertTrue(CategoryList[i] + " not found", textFound);
        }
    	
	}  
 
	//1938036:Check header items.
	public void testHeader() throws Exception{
	 
	 	enterClassification();
		solo.waitForText("商品", 1, 3000);
		solo.clickOnText("商品");
 		solo.sleep(3000);
 		
		View search = solo.getView("menu_search");
		View advance = solo.getView("menu_filter");
		boolean views = search.isShown() && advance.isShown();
		assertTrue("views not found",views);
		
 }
 
	//1938042:Check sort tab items all display.
	public void testSortTab() throws Exception{
	 
	 	enterClassification();
		String[] CategoryList = {"漢神百貨品牌服飾","漢神百貨內睡衣","流行女裝","中大尺碼女裝","女性內睡衣","品牌/潮流男裝"};
		int size = CategoryList.length;
    	for (int i=0; i<size; i++)
        {
    		boolean textFound = solo.searchText(CategoryList[i]);
    		assertTrue(CategoryList[i] + " not found", textFound);
        }
		 
 }
 
	//1938043:check return to item list.
	public void testItemList() throws Exception{
	 
		enterClassification();
		solo.waitForText("商品", 1, 3000);
		solo.clickOnText("商品");
		solo.waitForText("分類", 1, 3000);
		solo.clickOnText("分類");
		solo.goBack();
		Assert.CategoryListShow(solo);
 	 
 }
 
	//1938052:check "搜寻服饰" show in search bar.
	public void testSearchbarDefault() throws Exception{
	 
	 enterClassification();
	 solo.sleep(3000);
	 solo.clickOnView(solo.getView("menu_search")); 
	 assertTrue("Cannot find '搜尋服飾'",solo.searchText("搜尋服飾",1));
    
 }
 
	//1938053:check switch to sort tab.
	public void testSort() throws Exception{
	 
	 enterClassification();
	 Action.enterAdvancedPage(solo); 
	 String[] CategoryList = {"相關度","最新上架","價錢低到高","價錢高到低"};
	 int size = CategoryList.length;
 	 for (int i=0; i<size; i++)
 	 	{
 		 	boolean textFound = solo.searchText(CategoryList[i]);
 		 	assertTrue(CategoryList[i] + " not found", textFound);
     }
    
 }
	
	//1938054:check switch to filter sort tab.
	public void testFilterSort() throws Exception{
	 
	 enterClassification();
	 solo.sleep(2000);
	 Action.enterAdvancedPage(solo);
	 solo.sleep(3000);
	 solo.clickOnView(solo.getView("btn_filter"));
	 String[] CategoryList = {"可刷卡" ,"0利率","可分期","超商付款",  "有現貨", "有影音" ,"有圖片", "優良商店"};
	 int size = CategoryList.length;
 	 for (int i=0; i<size; i++)
 	 	{
 		 	boolean textFound = solo.searchText(CategoryList[i]);
 		 	assertTrue(CategoryList[i] + " not found", textFound);
     }
    
 }
 
	//1938060:check the sort layout
	public void testSortLayout() throws Exception{
	 
	 enterClassification();
	 Action.enterAdvancedPage(solo);
	 solo.sleep(3000);
	 solo.clickOnView(solo.getView("btn_filter"));
     View ScrollBar = solo.getView("seekbar",0);
     View TableRowOne = solo.getView("tableRow1",0);
     View TableRowTwo = solo.getView("tableRow2",0);
     View TableRowThree = solo.getView("tableRow3",0); 
     solo.sleep(3000);
     boolean views = ScrollBar.isShown() && TableRowOne.isShown() && TableRowTwo.isShown()&& TableRowThree.isShown();
     assertTrue("views not found.",views);
     
 	}
	
	//2014-04-18
	//1938055: verify the order of 排序 items
	public void testSortOptions() throws Exception{
		
		enterClassification();
		Action.enterAdvancedPage(solo);
		
		ListView lv = (ListView)solo.getView("list_sort",0);
		lv.getItemAtPosition(0);
		int listviewCount = lv.getCount(); 
		assertEquals("Not four items in list.",listviewCount,4);
		for(int i=0; i<listviewCount; i++){
		
			boolean sortList = lv.getItemAtPosition(0).equals("相關度") && lv.getItemAtPosition(1).equals("最新上架") 
					&& lv.getItemAtPosition(2).equals("價錢低到高") && lv.getItemAtPosition(3).equals("價錢高到低") ;
 
 		 	assertTrue("Sort incorrect.", sortList);
 		 	
		 }
		 
	}
	
	//1938063:Check the "确定" button to display
	public void testComfirmButtonDisplay() throws Exception{
			
			enterClassification();
			Action.enterAdvancedPage(solo);
			solo.sleep(3000);
			solo.clickOnView(solo.getView("btn_filter"));
			Button lv = (Button)solo.getView("btn_ok");			 
			assertEquals("Not find confirm button.", "確定", lv.getText().toString());
 
		}
		
	//1938047:check default items display.
	public void testCheckTheDefaultItems() throws Exception{	
	
		enterClassification();
		solo.waitForText("商品", 1, 3000);
		solo.clickOnText("商品");
		solo.sleep(3000);
		GridView lv = (GridView)solo.getView("gridview",0);
		int defaultItems = lv.getCount(); 
		assertEquals("The default items incorrect.",21,defaultItems);
		
	}

	//1938048:check auto load more data.
	public void testAutoLoadMore() throws Exception{
		
		enterClassification();
		solo.waitForText("商品", 1, 3000);
		solo.clickOnText("商品");
		solo.sleep(3000);
		GridView lv = (GridView)solo.getView("gridview",0);
		
		//Scroll the screen to load more data.
		for(int i=0; i<8; i++){
			TestHelper.swipeUp(solo, 1);	
		}	
		
		boolean listviewCount2 = lv.getCount()>22;			 
		assertTrue("The default items incorrect.",listviewCount2);
		
	}
	
	//1938069:check “可刷卡” can changed to unselected.
	public void testCreditCardMode() throws Exception{
			
			enterClassification();
			
			//Go to advanced sort page.
			Action.enterAdvancedSortPage(solo);
			
			//solo.clickOnToggleButton("可刷卡");
			ToggleButton tb = (ToggleButton)solo.getView("tb_cc");
			
			solo.clickOnView(tb);
			solo.sleep(3000);
			assertTrue(" '可刷卡'  button unselected.",tb.isChecked());
			solo.clickOnView(tb);
			solo.sleep(3000);
			assertFalse("'可刷卡'  button  selected.",tb.isChecked());
			
		}
	
	//2014-04-22
	//1938072:check “有影音” can changed to unselected.
	public void testHasVideoMode() throws Exception{
		
		enterClassification();
		
		//Go to advanced sort page.
		Action.enterAdvancedSortPage(solo);
		
		//Get "hasVideo" button.
		ToggleButton tb = (ToggleButton)solo.getView("tb_hasvideo");
		
		solo.clickOnView(tb);
		solo.sleep(3000);
		assertTrue(" '有影音'  button unselected.",tb.isChecked());
		solo.clickOnView(tb);
		solo.sleep(3000);
		assertFalse("'有影音'  button  selected.",tb.isChecked());
		
	}
	
	//1938075:check “0利率” can changed to unselected.
	public void testZeroInterestMode() throws Exception{
		enterClassification();
		
		//Go to advanced sort page.
		Action.enterAdvancedSortPage(solo);
		
		//Get "0 Interest" button.
		ToggleButton tb = (ToggleButton)solo.getView("tb_cczeroint");
		
		solo.clickOnView(tb);
		solo.sleep(3000);
		assertTrue(" '0利率'  button unselected.",tb.isChecked());
		solo.clickOnView(tb);
		solo.sleep(3000);
		assertFalse("'0利率'  button  selected.",tb.isChecked());
	}
	
	//1938078:check “可分期” can changed to unselected.
	public void testInstallmentsMode() throws Exception{
		
		enterClassification();
		
		//Go to advanced sort page.
		Action.enterAdvancedSortPage(solo);
		
		//Get "Installments" button.
		ToggleButton tb = (ToggleButton)solo.getView("tb_ccinstall");
		
		solo.clickOnView(tb);
		solo.sleep(3000);
		assertTrue(" '可分期'  button unselected.",tb.isChecked());
		solo.clickOnView(tb);
		solo.sleep(3000);
		assertFalse("'可分期'  button  selected.",tb.isChecked());
		
	}
	
	//1938081:check “超商付款” can changed to unselected.
	public void testSupermarketPaymentMode() throws Exception{
		
		enterClassification();
		
		//Go to advanced sort page.
		Action.enterAdvancedSortPage(solo);
		
		//Get "Payment" button.
		ToggleButton tb = (ToggleButton)solo.getView("tb_cvs_pay");
		
		solo.clickOnView(tb);
		solo.sleep(3000);
		assertTrue(" '超商付款'  button unselected.",tb.isChecked());
		solo.clickOnView(tb);
		solo.sleep(3000);
		assertFalse("'超商付款'  button  selected.",tb.isChecked());
		
	}
	
	//1938084:check “超商取貨” can changed to unselected.
	public void testSupermarketPickupMode() throws Exception{
		
		enterClassification();
		
		//Go to advanced sort page.
		Action.enterAdvancedSortPage(solo);
		
		//Get "Pickup" button.
		ToggleButton tb = (ToggleButton)solo.getView("tb_cvs_pick");
		
		solo.clickOnView(tb);
		solo.sleep(3000);
		assertTrue(" '超商取貨'  button unselected.",tb.isChecked());
		solo.clickOnView(tb);
		solo.sleep(3000);
		assertFalse("'超商取貨'  button  selected.",tb.isChecked());
		
	}
	
	//1938087:check “有現貨” can changed to unselected.
	public void testHasStockMode() throws Exception{
		enterClassification();
		
		//Go to advanced sort page.
		Action.enterAdvancedSortPage(solo);
		
		//Get "Has Stock" button.
		ToggleButton tb = (ToggleButton)solo.getView("tb_hasstock");
		
		solo.clickOnView(tb);
		solo.sleep(3000);
		assertTrue(" '有現貨'  button unselected.",tb.isChecked());
		solo.clickOnView(tb);
		solo.sleep(3000);
		assertFalse("'有現貨'  button  selected.",tb.isChecked());
		
	}
	
	//1938090:check “有圖片” can changed to unselected.
	public void testHasImageMode() throws Exception{
		enterClassification();
		
		//Go to advanced page.
		Action.enterAdvancedSortPage(solo);
		
		//Get "HasImage" button.
		ToggleButton tb = (ToggleButton)solo.getView("tb_hasimage");
		
		solo.clickOnView(tb);
		solo.sleep(3000);
		assertTrue(" '有圖片'  button unselected.",tb.isChecked());
		solo.clickOnView(tb);
		solo.sleep(3000);
		assertFalse("'有圖片'  button  selected.",tb.isChecked());
		
	}
	
	//1938093:check “優良商店” can changed to unselected.
	public void testSuperiorStoreMode() throws Exception{
		
		enterClassification();
		
		//Go to advanced page.
		Action.enterAdvancedSortPage(solo);
		
		//Get "SuperiorStore" button.
		ToggleButton tb = (ToggleButton)solo.getView("tb_issuperior");
		
		solo.clickOnView(tb);
		solo.sleep(3000);
		assertTrue(" '優良商店'  button unselected.",tb.isChecked());
		solo.clickOnView(tb);
		solo.sleep(3000);
		assertFalse("'優良商店'  button  selected.",tb.isChecked());
		
	}
	
	//1938100:Check the commodity price display.
	public void testCommodityPriceDisplay() throws Exception{
		
		enterClassification();
		solo.waitForText("商品", 1, 3000);
		solo.clickOnText("商品");
		solo.sleep(3000);
		TextView price = (TextView) solo.getView("listitem_productlist_price",0);
		String sr = price.getText().toString();	 
		
		//Judgment whether the price matches the format of '$xxx'.
		boolean isNum =sr.matches("[$][0-9]+"); 
		
		assertTrue(" Cannot find the commodity price or price format is incorrect! ",isNum);
		
		}
	
	//1938101:Check the Shops score display.
	public void testShopsScoreDisplay() throws Exception{
		
		enterClassification();
		solo.waitForText("商品", 1, 3000);
		solo.clickOnText("商品");
		solo.sleep(3000);
		TextView price = (TextView) solo.getView("listitem_productlist_store_rating",1);
		String sr = price.getText().toString();	 
 
		//Judgment whether the price matches the format of 'x.x'.
		boolean isNum =sr.matches("^[0-9].[0-9]+$"); 

		assertTrue(" Cannot find the shops score or score format is incorrect! ",isNum);

	}
	//2014-04-24
	//1938102:Check the Star icon display
	public void testStarIconDisplay() throws Exception{
		
		enterClassification();
		solo.waitForText("商品", 1, 3000);
		solo.clickOnText("商品");
		solo.sleep(3000);
		View star = (View) solo.getView("star_button",1);
		assertTrue(" Cannot find the star icon ",star.isShown());

	}
	
	//2014-04-25
	 //1938130:Check "全部分類" at the bottom of the screen. 
	 public void testAllClassificationExist() throws Exception{
		 
		 
		 View classificationIcon = (View) solo.getView("tab_image",2);
		 
		 TextView classificationText = (TextView)solo.getView("tab_text",2);
		 boolean text = classificationText.getText().toString().equals("全部分類");

		 assertTrue("All classification does not exist.",classificationIcon.isShown() && text);
	 }
	 
	 //1938131:Check all classification item page. 
	 public void testAllClassificationItemPage() throws Exception{
		 
		 solo.clickOnView(solo.getView("tab_image",2));
		 Assert.CategoryListShow(solo);
	 }
	 
	 //1938133:Check  the screen top text.
	 public void testClassificationTextOnTheTop() throws Exception{
		 
		 solo.clickOnView(solo.getView("tab_image",2));
		 TextView classificationText = (TextView)solo.getView("action_bar_title");
		 boolean text = classificationText.getText().toString().trim().equals("全部分類");
		  
		 assertTrue("All classification text does not exist.",text);

	 }
	 
	 //1938135:Check the search icon on the screen top.
	 public void testSearchIconOnTheTop() throws Exception{
		 
		 solo.clickOnView(solo.getView("tab_image",2));
		 View searchIcon = (View)solo.getView("menu_search",0);
 
		 assertTrue("Search icon does not exist.",searchIcon.isShown());

	 }
 	
 	//1938141:Check latest update sidebar.
	 public void testLatestUpdateSidebar() throws Exception{
		 
		 solo.clickOnView(solo.getView("tab_image",2));
		 
		 TextView mostFavoriteText = (TextView)solo.getView("tab_text",0);
		 boolean text = mostFavoriteText.getText().toString().equals("最新動態");
		 
		 View latestUpdateIcon = (View)solo.getView("tab_image",0);
		 
		 assertTrue("Latest update sidebar does not exist.",latestUpdateIcon.isShown() && text);
	 }
	 
	 //1938143:Check most  favorite store sidebar.
	 public void testMostFavoriteSidebar() throws Exception{
		 
		 solo.clickOnView(solo.getView("tab_image",2));
		 
		 TextView mostFavoriteText = (TextView)solo.getView("tab_text",1);
		 boolean text = mostFavoriteText.getText().toString().equals("最愛商店");
		 String texts = mostFavoriteText.getText().toString();
		 Log.i("what",texts);
		 View mostFavoriteIcon = (View)solo.getView("tab_image",1);
		 
		 assertTrue("Most favorite sidebar does not exist.",mostFavoriteIcon.isShown() && text);
	 }
	 
	 //1938145:Check shopping Cart sidebar
	 public void testShoppingCartSidebar() throws Exception{
		 
		 solo.clickOnView(solo.getView("tab_image",2));
		 
		 TextView shoppingCart = (TextView)solo.getView("tab_text",3);
		 boolean text = shoppingCart.getText().toString().equals("購物車");
		 
		 View shoppingCartIcon = (View)solo.getView("tab_image",3);
		 
		 assertTrue("Shopping Cart sidebar does not exist.",shoppingCartIcon.isShown() && text);
	 }
	 
	 //1938147:Check my account sidebar.
	 public void testMyAccountSidebar() throws Exception{
		 
		 solo.clickOnView(solo.getView("tab_image",2));
		 
		 TextView myAccount = (TextView)solo.getView("tab_text",4);
		 boolean text = myAccount.getText().toString().trim().equals("我的帳戶");
		 
		 String temp = myAccount.getText().toString();
		 Log.i("what",temp);
		 
		 View myAccountIcon = (View)solo.getView("tab_image",4);
		 
		 assertTrue("My account sidebar does not exist.",myAccountIcon.isShown() && text);
	 }
	 
	 //1938149:Check '服飾' is displayed on the top of the screen.
	 public void testDressDisplayedOnTheScreen() throws Exception{
		 
		 enterClassification();
		 TextView dressText = (TextView)solo.getView("action_bar_title",0);
		 boolean text = dressText.getText().toString().trim().equals("服飾");
		 Log.i("what",dressText.getText().toString());
		 assertTrue("dress does not exist.",text);

	 }
	 
	 //1938150:Check '美妝' is displayed on the top of the screen.
	 public void testMakeupDisplayedOnTheScreen() throws Exception{
		 
		 solo.clickOnView(solo.getView("tab_image",2));
		 solo.clickOnText("美妝");
		 solo.sleep(2000);
		 TextView makeupText = (TextView)solo.getView("action_bar_title",0);
		 boolean text = makeupText.getText().toString().trim().equals("美妝");
		 assertTrue("Makeup does not exist.",text);
		 
	 }
	 
	 //1938151:Check '鞋包配飾' is displayed on the top of the screen.
	 public void testAccessoriesDisplayedOnTheScreen() throws Exception{
		 
		 solo.clickOnView(solo.getView("tab_image",2));
		 solo.clickOnText("鞋包配飾");
		 solo.sleep(2000);
		 TextView accessories = (TextView)solo.getView("action_bar_title",0);
		 boolean text = accessories.getText().toString().trim().equals("鞋包配飾");
		 assertTrue("Accessories does not exist.",text);
		 
	 }
	 
	 //1938152:Check '媽咪寶貝' is displayed on the top of the screen.
	 public void testBabyDisplayedOnTheScreen() throws Exception{
		 
		 solo.clickOnView(solo.getView("tab_image",2));
		 solo.clickOnText("媽咪寶貝");
		 solo.sleep(2000);
		 TextView baby = (TextView)solo.getView("action_bar_title",0);
		 boolean text = baby.getText().toString().trim().equals("媽咪寶貝");
	 
		 assertTrue("Mom's Baby text does not exist.",text);
		 
	 }
	 
	 //1938153:Check '電腦/週邊' is displayed on the top of the screen.
	 public void testComputerDisplayedOnTheScreen() throws Exception{
		 
		 solo.clickOnView(solo.getView("tab_image",2));
		 solo.clickOnText("電腦/週邊");
		 solo.sleep(2000);
		 TextView Computer = (TextView)solo.getView("action_bar_title",0);
		 boolean text = Computer.getText().toString().trim().equals("電腦/週邊");
 
		 assertTrue("Computer text does not exist.",text);
		 
	 }
	 
	 //1938154:Check '家電/視聽' is displayed on the top of the screen.
	 public void testHouseholdAppliancesDisplayedOnTheScreen() throws Exception{
		 
		 solo.clickOnView(solo.getView("tab_image",2));
		 solo.clickOnText("家電/視聽");
		 solo.sleep(2000);
		 TextView householdAppliances = (TextView)solo.getView("action_bar_title",0);
		 boolean text = householdAppliances.getText().toString().trim().equals("家電/視聽");
		 
		 Log.i("what",householdAppliances.getText().toString());
		 
		 assertTrue("Computer text does not exist.",text);
		 
	 }
	 
	//1938155:Check '相機/手機/玩具' is displayed on the top of the screen.
	 public void testFasionDigitalDisplayedOnTheScreen() throws Exception{
			 
			 solo.clickOnView(solo.getView("tab_image",2));
			 solo.clickOnText("相機/\n手機/玩具");
			 solo.sleep(2000);
			 TextView digital = (TextView)solo.getView("action_bar_title",0);
			 boolean text = digital.getText().toString().trim().equals("相機/手機/玩具");
		 
			 assertTrue("Fasion digital text does not exist.",text);
			 
		 }
		 
	//1938156:Check '美食/保健/飲料' is displayed on the top of the screen.
	 public void testFoodDisplayedOnTheScreen() throws Exception{
			 
			 solo.clickOnView(solo.getView("tab_image",2));
			 solo.clickOnText("美食/\n保健/飲料");
			 solo.sleep(2000);
			 TextView food = (TextView)solo.getView("action_bar_title",0);
			 boolean text = food.getText().toString().trim().equals("美食/保健/飲料");
			 Log.i("what",food.getText().toString().trim());
			 assertTrue("Food text does not exist.",text);
			 
		 }
	
	 //1938157:Check '日用品/清潔/寵物' is displayed on the top of the screen.
		 public void testCleanDisplayedOnTheScreen() throws Exception{
			 
			 solo.clickOnView(solo.getView("tab_image",2));
			 solo.clickOnText("日用品/\n清潔/寵物");
			 solo.sleep(2000);
			 TextView clean = (TextView)solo.getView("action_bar_title",0);
			 boolean text = clean.getText().toString().trim().equals("日用品/清潔/寵物");
			
			 assertTrue("Clean text does not exist.",text);
			 
		 }
		 
		 //1938158:Check '居家/寢具/傢俱' is displayed on the top of the screen.
		 public void testHomeDisplayedOnTheScreen() throws Exception{
			 
			 solo.clickOnView(solo.getView("tab_image",2));
			 solo.clickOnText("居家/\n寢具/傢俱");
			 solo.sleep(2000);
			 TextView home = (TextView)solo.getView("action_bar_title",0);
			 boolean text = home.getText().toString().trim().equals("居家/寢具/傢俱");
 
			 assertTrue("home text does not exist.",text);
			 
		 }
		 
		//1938159:Check '運動/戶外/休閒' is displayed on the top of the screen.
		 public void testSportDisplayedOnTheScreen() throws Exception{
			 
			 solo.clickOnView(solo.getView("tab_image",2));
			 solo.clickOnText("運動/\n戶外/休閒");
			 solo.sleep(2000);
			 TextView sport = (TextView)solo.getView("action_bar_title",0);
			 boolean text = sport.getText().toString().trim().equals("運動/戶外/休閒");
 
			 assertTrue("sport text does not exist.",text);
			 
		 }
		 
		//1938160:Check '圖書/文具/影音' is displayed on the top of the screen.
		 public void testBookDisplayedOnTheScreen() throws Exception{
			 
			 solo.clickOnView(solo.getView("tab_image",2));
			 solo.clickOnText("圖書/\n文具/影音");
			 solo.sleep(2000);
			 TextView book = (TextView)solo.getView("action_bar_title",0);
			 boolean text = book.getText().toString().trim().equals("圖書/文具/影音");

			 assertTrue("book text does not exist.",text);
			 
		 }
	 
		 //1938103:Check to click the start icon without login.
		 public  void testStarIconWithoutLogin() throws Exception{
			 
			// Account.accountLogIn(solo);
			 Account.JudgementAccountStatus(solo);
			// Account.accountLogIn(solo);
			 enterClassification();
			 solo.waitForText("商品", 1, 3000);
			 solo.clickOnText("商品");
			 solo.sleep(3000);
			 View star = (View) solo.getView("star_button",1); 
			 solo.clickOnView(star);
			 assertTrue("Toast not show!",solo.waitForText("請先登入賬號"));
		 }
}
