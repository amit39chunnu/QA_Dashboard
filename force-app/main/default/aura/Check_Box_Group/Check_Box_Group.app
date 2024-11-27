<aura:application extends="force:slds">
    <aura:attribute name="myoptions" type="List" default="[ {'label':'Hyd','value':'TG'},{'label':'Ban','value':'KA'}]" />
    <aura:attribute name="mylist" type="String[]" />
    <lightning:checkboxGroup label="Cities" name="cities" options="{!v.myoptions}" value="{!v.mylist}" onchange="{!c.show}" />
</aura:application>