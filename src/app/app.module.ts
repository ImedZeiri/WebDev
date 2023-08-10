import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CardComponent } from './shared/card/card.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SliderComponent } from './UI/slider/slider.component';
import { Section1Component } from './components/section1/section1.component';
import { Section2Component } from './components/section2/section2.component';
import { Section3Component } from './components/section3/section3.component';
import { Section4Component } from './components/section4/section4.component';
import { ProgressWrapComponent } from './UI/progress-wrap/progress-wrap.component';
import { OwlModule } from "ngx-owl-carousel";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AccordionComponent } from './shared/accordion/accordion.component';
import { WidgetComponent } from './shared/widget/widget.component';
import { PersonCardComponent } from './shared/person-card/person-card.component';
import { CarouselComponent } from './shared/carousel/carousel.component';
import { CarouselModule } from "ngx-bootstrap/carousel";
import { ImageWrapperComponent } from './shared/image-wrapper/image-wrapper.component';
import { ChecklistComponent } from './shared/checklist/checklist.component';
import { FigureComponent } from './shared/figure/figure.component';
import { CarouselQuotesComponent } from './shared/carousel-quotes/carousel-quotes.component';
import { TicketComponent } from './shared/ticket/ticket.component';
import { PricingCardComponent } from './shared/pricing-card/pricing-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    CardComponent,
    NavbarComponent,
    SliderComponent,
    Section1Component,
    Section2Component,
    Section3Component,
    Section4Component,
    ProgressWrapComponent,
    AccordionComponent,
    WidgetComponent,
    PersonCardComponent,
    CarouselComponent,
    ImageWrapperComponent,
    ChecklistComponent,
    FigureComponent,
    CarouselQuotesComponent,
    TicketComponent,
    PricingCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    OwlModule,
    CarouselModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
