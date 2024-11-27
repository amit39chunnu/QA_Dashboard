<aura:application extends="force:slds" >
    <aura:attribute name="like" type="Boolean" default="false" />
    <aura:attribute name="answer" type="Boolean" default="true"/>
    <lightning:buttonIconStateful selected="{!v.like}" iconName="utility:like"  onclick="{!c.show}"/>
    <lightning:buttonIconStateful selected="{!v.answer}" iconName="utility:answer" onclick="{!c.call}" />
</aura:application>