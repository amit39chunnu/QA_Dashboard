<aura:application extends="force:slds">
    <aura:handler name="init" value="{!this}" action="{!c.init}" />
    <aura:attribute name="items" type="Object" access="PRIVATE"/>

    <lightning:tree items="{! v.items }" header="Roles"/>
</aura:application>