<aura:application extends="force:slds">
    <lightning:buttonGroup>
    	<lightning:button variant="neutral" label="Refresh" onclick="{!c.add}" />
		<lightning:button variant="neutral" label="Edit" onclick="{!c.sub}" />
		<lightning:button variant="neutral" label="Save" onclick="{!c.cancel}" />
    </lightning:buttonGroup>
    <lightning:input type="number" aura:id="aval" label="Avalue" />
    <lightning:input type="number" aura:id="bval" label="Bvalue" />
    <lightning:input type="number" aura:id="cval" label="Cvalue" />
</aura:application>