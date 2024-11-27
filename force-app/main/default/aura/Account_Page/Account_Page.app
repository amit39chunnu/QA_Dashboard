<aura:application extends="force:slds">
    <lightning:button label="submit" onclick="{!c.show}" />
	<lightning:accordion>
    	<lightning:accordionSection name="a" Label="Account">
            <lightning:input label="Name" value="Satish" />
            <lightning:input label="Name" value="Satish" aura:id="name"/>
            <lightning:input label="Name" value="Satish" />
            <lightning:input label="Name" value="Satish" />
        </lightning:accordionSection>
        <lightning:accordionSection name="a" Label="Account">
            <lightning:input label="Name" value="Satish" />
            <lightning:input label="Name" value="Satish" />
            <lightning:input label="Name" value="Satish" aura:id="myname" />
            <lightning:input label="Name" value="Satish" />
        </lightning:accordionSection>
        <lightning:accordionSection name="a" Label="Account">
            <lightning:input label="Name" value="Satish" />
            <lightning:input label="Name" value="Satish" aura:id="age"/>
            <lightning:input label="Name" value="Satish" />
            <lightning:input label="Name" value="Satish" />
            <lightning:button label="cancel" onclick="{!c.call}" />`
        </lightning:accordionSection>
      
    </lightning:accordion>
</aura:application>