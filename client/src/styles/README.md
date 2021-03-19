# CSS OBJECTS (cssObjects)

1. animations: css keyframes to be used by componenents to animate them
- spin
- circularProgressing
- linearProgressing

2. elevation (box-shadow): returns the box-shadow of a component - the higher the param (level) provided, the further away from the base level - level must be between 0 and 24.
i.e. elevation(5);

3. frostedGlass (blur effect): creates a background blur effect on the component using its css - you can provide a string `colour`, defaults to white. Optionally, you can provide a type with a payload where the type will be `status` OR `accent` depending on why the component is being used (status for user feedback), and payload being the relavent status descriptor (i.e. `error`, `success`) and accent-colour (i.e `purple` or `orange`).
i.e. frostedGlass();
i.e. frostedGlass('white', 'status', 'error');
i.e. frostedGlass('white', 'accent', 'purple')


4. font (typography): returns a css object containing the font properties according to input. 
The input: size (between 1(small) and 9(large)), the setting ('DISPLAY','TITLE','BODY') and the boolean flag for italics.
i.e. font(6, 'DISPLAY', false);

5. zIndex (css z-index property): returns the css object with the z-index for that component being either 'bottom', 'below' etc...
i.e. zIndex('top');

# GLOBAL STYLES (globalStyles)

1. GlobalStyle - the global stylesheet for the body and common elements

# STYLE MAPS (styleMaps)

1. blurValue - backdrop filter, returns `blur(x)`
2. borderRadius - rounding of corners, returns px value
3. colours & gradients - pre-defined set of common colours and gradients
4. mediaQuery - uses pre-defined mapping to common device sizes to be used in media-queries, 
    i.e. mediaQuery('xsmall')  returns `max-width: 576px`,
5. spacing - size of spaces in terms of margin or padding in multiples of 4 to keep things uniform