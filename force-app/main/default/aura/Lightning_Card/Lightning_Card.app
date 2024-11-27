<aura:application extends="force:slds">
	<lightning:card>
    	<aura:set attribute="title">
            <lightning:avatar src="{!$Resource.MyImage}" />
            <div class="slds-text-heading__caps">My Page</div>
        </aura:set>
        <aura:set attribute="footer">
        	<lightning:buttonGroup>
                <lightning:button label="Add" onclick="{!c.add}" />
                 <lightning:button label="Add" onclick="{!c.add}" />
                 <lightning:button label="Add" onclick="{!c.add}" />
            </lightning:buttonGroup>
        </aura:set>
        <lightning:input label="Enter Name" />
        <lightning:input label="Enter City" />
    </lightning:card>
    <lightning:card title="MyCard" footer="MyFooter" variant="narrow">
        <aura:set attribute="actions">
            <lightning:button label="Submit" />
        </aura:set>
        This is my body <br/><br/>
        This is my body
    </lightning:card>
</aura:application>