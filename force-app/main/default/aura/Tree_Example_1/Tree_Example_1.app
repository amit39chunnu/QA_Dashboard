<aura:application extends="force:slds" >
    <aura:handler name="init" value="{!this}" action="{!c.show}" />
    <aura:attribute name="items" type="object" />
    <aura:attribute name="selected" type="String" />
    <lightning:tree items="{!v.items}" onselect="{!c.call}" />
    <lightning:input label="Selected" value="{!v.selected}" />
</aura:application>