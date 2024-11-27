<aura:application >
    <c:UI_Example_2 />
    <ui:menu >
    <ui:menuTriggerLink aura:id="trigger" label="Click me to display menu items"/>
    <ui:menuList class="actionMenu" aura:id="actionMenu">
        <ui:checkboxMenuItem aura:id="item1" label="Item 1" click="{!c.doSomething}"/>
        <ui:checkboxMenuItem aura:id="item2" label="Item 2" click="{!c.doSomething}"/>
        <ui:checkboxMenuItem aura:id="item3" label="Item 3" click="{!c.doSomething}"/>
        <ui:checkboxMenuItem aura:id="item4" label="Item 4" click="{!c.doSomething}"/>
   </ui:menuList>
</ui:menu>
</aura:application>