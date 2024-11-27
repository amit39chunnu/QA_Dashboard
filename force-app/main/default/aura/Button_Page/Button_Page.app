<aura:application extends="force:slds">
	<lightning:buttonmenu aura:id="myData" onselect="{!c.show}">
    	<lightning:menuItem value="MenuItemOne" label="Menu Item One" />
        <lightning:menuItem value="MenuItemTwo" label="Menu Item Two" />
        <lightning:menuItem value="MenuItemThree" label="Menu Item Three" disabled="true" />
        <lightning:menuItem value="MenuItemFour" label="Menu Item Four" />
    </lightning:buttonmenu>
</aura:application>