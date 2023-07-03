import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
 <Section row nopadding>
   <LeftSection>
    <SectionTitle main center>
      Hi There! <br/>I'm Thivviyan<br/> 
      Full stack developer

    </SectionTitle>
    <SectionText>
    A good experience in Create Modern web-Applications and attractive websites and the main purpose of this portfolio is sharing  about my knowledge and my works with you.
</SectionText>
<Button onClick={()=>window.location = 'https://google.com'}>Learn More</Button>
   </LeftSection>
 </Section>
);

export default Hero;