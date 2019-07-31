import { Component, TemplateRef, ViewChild, ElementRef } from '@angular/core';

import { SwiperConfigInterface } from 'ngx-swiper-wrapper/dist/lib/swiper.interfaces';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { MapsAPILoader } from '@agm/core';

import { Stay } from '../core/types/stay.interface';

declare const google: any;

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent{
  @ViewChild('addresstext', { static: false }) addresstext: ElementRef;
  modalRef: BsModalRef;
  headerConfig: SwiperConfigInterface = {
    slidesPerView: 6,
    spaceBetween: 20,
    navigation: {
      nextEl: '.main-swiper-button-next',
      prevEl: '.main-swiper-button-prev',
    }
  };
  contentConfig1: SwiperConfigInterface = {
    slidesPerView: 4,
    spaceBetween: 20,
    navigation: {
      nextEl: '.content1-swiper-button-next',
      prevEl: '.content1-swiper-button-prev',
    }
  };
  contentConfig2: SwiperConfigInterface = {
    slidesPerView: 4,
    spaceBetween: 20,
    navigation: {
      nextEl: '.content2-swiper-button-next',
      prevEl: '.content2-swiper-button-prev',
    }
  };
  contentConfig3: SwiperConfigInterface = {
    slidesPerView: 4,
    spaceBetween: 20,
    navigation: {
      nextEl: '.content3-swiper-button-next',
      prevEl: '.content3-swiper-button-prev',
    }
  };
  lat = 37.543934;
  lng = 127.061167;
  zoom = 15;
  address = '서울특별시 성동구 성수동2가 277-43';
  bigSales: Stay[];
  partyRooms: Stay[];
  swimmingPools: Stay[];

  constructor(
    private modalService: BsModalService,
    private mapsAPILoader: MapsAPILoader
  ) {}

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.bigSales = [
      {
        directions: '강남역 초인접 위치(도로 5분 거리)',
        mainImage: 'https://yaimg.yanolja.com/v5/2018/10/04/11/1280/5bb577c8ad2cb3.53607180.JPG',
        category: '모텔',
        stay: '역삼마레',
        stayId: 1,
        totalComments: 9,
        averageGrade: 4.5,
        ownerComments: 7,
        hoursPrice: '25000',
        hoursAvailable: 4,
        saleHoursPrice: '18500',
        daysCheckIn: 22,
        daysPrice: '50000',
        saleDaysPrice: '41200'
      },
      {
        directions: '역삼역 도보 10분 거리',
        mainImage: 'https://yaimg.yanolja.com/v5/2018/10/04/11/1280/5bb577c8ad2cb3.53607180.JPG',
        category: '모텔',
        stay: '역삼 호텔 The Artist',
        stayId: 3,
        totalComments: 0,
        averageGrade: 0,
        ownerComments: 0,
        hoursPrice: '30000',
        hoursAvailable: 3,
        saleHoursPrice: '18500',
        daysCheckIn: 22,
        daysPrice: '50000',
        saleDaysPrice: '41200'
      },
      {
        directions: '강남역 초인접 위치(도로 5분 거리)',
        mainImage: 'https://yaimg.yanolja.com/v5/2018/10/04/11/1280/5bb577c8ad2cb3.53607180.JPG',
        category: '모텔',
        stay: '역삼마레1',
        stayId: 4,
        totalComments: 9,
        averageGrade: 4.5,
        ownerComments: 7,
        hoursPrice: '25000',
        hoursAvailable: 4,
        saleHoursPrice: '18500',
        daysCheckIn: 22,
        daysPrice: '50000',
        saleDaysPrice: '41200'
      },
      {
        directions: '역삼역 도보 10분 거리',
        mainImage: 'https://yaimg.yanolja.com/v5/2018/10/04/11/1280/5bb577c8ad2cb3.53607180.JPG',
        category: '모텔',
        stay: '역삼 호텔 The Artist2',
        stayId: 5,
        totalComments: 0,
        averageGrade: 0,
        ownerComments: 0,
        hoursPrice: '30000',
        hoursAvailable: 3,
        saleHoursPrice: '18500',
        daysCheckIn: 22,
        daysPrice: '50000',
        saleDaysPrice: '41200'
      },
      {
        directions: '역삼역 도보 10분 거리',
        mainImage: 'https://yaimg.yanolja.com/v5/2018/10/04/11/1280/5bb577c8ad2cb3.53607180.JPG',
        category: '모텔',
        stay: '역삼 호텔 The Artist3',
        stayId: 6,
        totalComments: 0,
        averageGrade: 0,
        ownerComments: 0,
        hoursPrice: '30000',
        hoursAvailable: 3,
        saleHoursPrice: '18500',
        daysCheckIn: 22,
        daysPrice: '50000',
        saleDaysPrice: '41200'
      }
    ];

    this.partyRooms = [
      {
        directions: '강남역 초인접 위치(도로 5분 거리)',
        mainImage: 'https://yaimg.yanolja.com/v5/2018/10/04/11/1280/5bb577c8ad2cb3.53607180.JPG',
        category: '모텔',
        stay: '역삼마레',
        stayId: 1,
        totalComments: 9,
        averageGrade: 4.5,
        ownerComments: 7,
        hoursPrice: '25000',
        hoursAvailable: 4,
        saleHoursPrice: '18500',
        daysCheckIn: 22,
        daysPrice: '50000',
        saleDaysPrice: '41200'
      },
      {
        directions: '역삼역 도보 10분 거리',
        mainImage: 'https://yaimg.yanolja.com/v5/2018/10/04/11/1280/5bb577c8ad2cb3.53607180.JPG',
        category: '모텔',
        stay: '역삼 호텔 The Artist',
        stayId: 3,
        totalComments: 0,
        averageGrade: 0,
        ownerComments: 0,
        hoursPrice: '30000',
        hoursAvailable: 3,
        saleHoursPrice: '18500',
        daysCheckIn: 22,
        daysPrice: '50000',
        saleDaysPrice: '41200'
      },
      {
        directions: '강남역 초인접 위치(도로 5분 거리)',
        mainImage: 'https://yaimg.yanolja.com/v5/2018/10/04/11/1280/5bb577c8ad2cb3.53607180.JPG',
        category: '모텔',
        stay: '역삼마레1',
        stayId: 4,
        totalComments: 9,
        averageGrade: 4.5,
        ownerComments: 7,
        hoursPrice: '25000',
        hoursAvailable: 4,
        saleHoursPrice: '18500',
        daysCheckIn: 22,
        daysPrice: '50000',
        saleDaysPrice: '41200'
      },
      {
        directions: '역삼역 도보 10분 거리',
        mainImage: 'https://yaimg.yanolja.com/v5/2018/10/04/11/1280/5bb577c8ad2cb3.53607180.JPG',
        category: '모텔',
        stay: '역삼 호텔 The Artist2',
        stayId: 5,
        totalComments: 0,
        averageGrade: 0,
        ownerComments: 0,
        hoursPrice: '30000',
        hoursAvailable: 3,
        saleHoursPrice: '18500',
        daysCheckIn: 22,
        daysPrice: '50000',
        saleDaysPrice: '41200'
      },
      {
        directions: '역삼역 도보 10분 거리',
        mainImage: 'https://yaimg.yanolja.com/v5/2018/10/04/11/1280/5bb577c8ad2cb3.53607180.JPG',
        category: '모텔',
        stay: '역삼 호텔 The Artist3',
        stayId: 6,
        totalComments: 0,
        averageGrade: 0,
        ownerComments: 0,
        hoursPrice: '30000',
        hoursAvailable: 3,
        saleHoursPrice: '18500',
        daysCheckIn: 22,
        daysPrice: '50000',
        saleDaysPrice: '41200'
      }
    ];

    this.swimmingPools = [
      {
        directions: '강남역 초인접 위치(도로 5분 거리)',
        mainImage: 'https://yaimg.yanolja.com/v5/2018/10/04/11/1280/5bb577c8ad2cb3.53607180.JPG',
        category: '모텔',
        stay: '역삼마레',
        stayId: 1,
        totalComments: 9,
        averageGrade: 4.5,
        ownerComments: 7,
        hoursPrice: '25000',
        hoursAvailable: 4,
        saleHoursPrice: '18500',
        daysCheckIn: 22,
        daysPrice: '50000',
        saleDaysPrice: '41200'
      },
      {
        directions: '역삼역 도보 10분 거리',
        mainImage: 'https://yaimg.yanolja.com/v5/2018/10/04/11/1280/5bb577c8ad2cb3.53607180.JPG',
        category: '모텔',
        stay: '역삼 호텔 The Artist',
        stayId: 3,
        totalComments: 0,
        averageGrade: 0,
        ownerComments: 0,
        hoursPrice: '30000',
        hoursAvailable: 3,
        saleHoursPrice: '18500',
        daysCheckIn: 22,
        daysPrice: '50000',
        saleDaysPrice: '41200'
      },
      {
        directions: '강남역 초인접 위치(도로 5분 거리)',
        mainImage: 'https://yaimg.yanolja.com/v5/2018/10/04/11/1280/5bb577c8ad2cb3.53607180.JPG',
        category: '모텔',
        stay: '역삼마레1',
        stayId: 4,
        totalComments: 9,
        averageGrade: 4.5,
        ownerComments: 7,
        hoursPrice: '25000',
        hoursAvailable: 4,
        saleHoursPrice: '18500',
        daysCheckIn: 22,
        daysPrice: '50000',
        saleDaysPrice: '41200'
      },
      {
        directions: '역삼역 도보 10분 거리',
        mainImage: 'https://yaimg.yanolja.com/v5/2018/10/04/11/1280/5bb577c8ad2cb3.53607180.JPG',
        category: '모텔',
        stay: '역삼 호텔 The Artist2',
        stayId: 5,
        totalComments: 0,
        averageGrade: 0,
        ownerComments: 0,
        hoursPrice: '30000',
        hoursAvailable: 3,
        saleHoursPrice: '18500',
        daysCheckIn: 22,
        daysPrice: '50000',
        saleDaysPrice: '41200'
      },
      {
        directions: '역삼역 도보 10분 거리',
        mainImage: 'https://yaimg.yanolja.com/v5/2018/10/04/11/1280/5bb577c8ad2cb3.53607180.JPG',
        category: '모텔',
        stay: '역삼 호텔 The Artist3',
        stayId: 6,
        totalComments: 0,
        averageGrade: 0,
        ownerComments: 0,
        hoursPrice: '30000',
        hoursAvailable: 3,
        saleHoursPrice: '18500',
        daysCheckIn: 22,
        daysPrice: '50000',
        saleDaysPrice: '41200'
      }
    ];
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(
      template,
      Object.assign({}, { class: 'modal-lg' })
    );
    this.mapsAPILoader.load().then(() => {
      this.findCurrentLocation();
    });
  }

  findCurrentLocation() {
    if (navigator) {
      navigator.geolocation.getCurrentPosition(pos => {
        this.lng = +pos.coords.longitude;
        this.lat = +pos.coords.latitude;
        this.getCurrentAddress(+pos.coords.latitude, +pos.coords.longitude);
      });
    }
  }

  getCurrentAddress(lat: number, lng: number) {
    if (navigator.geolocation) {
      const geocoder = new google.maps.Geocoder();
      const latlng = new google.maps.LatLng(lat, lng);
      const request = { latLng: latlng };
      geocoder.geocode(request, (results, status) => {
        if (status === google.maps.GeocoderStatus.OK) {
          const result = results[0];
          if (result != null) {
            const splitAddress = (result.formatted_address).split('대한민국 ');
            this.address = splitAddress[1];
          } else {
            alert('No address available!');
          }
        }
      });
    }
  }

  positionChange(e) {
    this.lng = e.coords.lng;
    this.lat = e.coords.lat;
    this.getCurrentAddress(e.coords.lat, e.coords.lng);
  }

  locationComplete() {
    this.modalRef.hide();
    this.addresstext.nativeElement.value = this.address;
  }
}
