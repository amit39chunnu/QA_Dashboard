<aura:application extends="force:slds">
    <lightning:input type="number" aura:id="aval" />
    <lightning:input type="number" aura:id="bval" />
    <lightning:input type="number" aura:id="cval" />
	<lightning:buttonmenu aura:id="my" onselect="{!c.call}" >
        <lightning:menuItem label="Add" value="Add" />
        <lightning:menuItem label="Sub" value="Sub" />
    </lightning:buttonmenu>
  
</aura:application>