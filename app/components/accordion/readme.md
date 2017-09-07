# Accordion Component #

### STORY ###
# Story number : HU-1246


# The Accordion displays as a single stack of Accordion Blades in all the views.

# The component has the following elements:
*# Accordion Blade (mandatory):
**# On click/tap, opens the accordion panel and changes to the OPEN state (i.e. the Blade Label is bold, and the Hide icon displays).
**# On click/tap again, closes the accordion panel and changes to the CLOSE state (i.e. the Blade Label is *not* bold, and the Hide icon displays).
*# Blade Label (mandatory):
**# Supports an unlimited number of characters.
*# Show icon (mandatory):
**# Only displays in the closed state.
**# On click/tap, opens the accordion panel and changes to the OPEN state.
*# Hide icon (mandatory):
**# Only displays in the open state.
**# On click/tap, closes the accordion panel and changes to the CLOSE state.
*# Flexible Panel (mandatory):
**# Only shown in the OPEN state.
**# The Author can configure whether only one or multiple panels can be open at a time.
**# The Author can configure which panel(s) is open by default.
**# Accepts *any* component.
**# Each panel holds self-contained content. The panel adjusts to the height of the content.
**# The Accordion occupies 100% of the width of the parent container. The components and content inside the Accordion wrap based on the width of the parent container.


### VD ###
Path to the zip file : https://lion.box.com/s/65criqmfwtgq7qzs8wbzfhf9zbbmk092
PSD : https://lion.box.com/s/65criqmfwtgq7qzs8wbzfhf9zbbmk092
CDC 1.0

### USAGE ###
** By default, if we want to show the accordion open, then we should give "isOpen" value as false otherwise it should be given as true.
