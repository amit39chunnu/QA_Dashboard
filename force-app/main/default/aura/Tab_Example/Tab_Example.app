<aura:application extends="force:slds">
	<lightning:tabset selectedTabId="two">
        <lightning:tab label="Item One" id="one">
            <lightning:input label="Name"  aura:id="name" />
        </lightning:tab>
        <lightning:tab label="Item Two" id="two">
            <lightning:input label="Age"  aura:id="age" />
        </lightning:tab>
        <lightning:tab label="Item Three" id="three">
           <lightning:input label="Phone"  aura:id="phone" />
            <lightning:button label="submit" onclick="{!c.show}" />
        </lightning:tab>
    </lightning:tabset>
</aura:application>