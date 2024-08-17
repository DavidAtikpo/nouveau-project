<template>
    <div class="geolocation-container">
      <h1>My Location</h1>
        <img
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d546.0737132667462!2d1.5763973250862315!3d6.22851862994744!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1023939d979d1b83%3A0x8509a37ac83dae1a!2sCDE%20KOINONIA!5e1!3m2!1sfr!2sgh!4v1723779045624!5m2!1sfr!2sgh" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"
          alt="Map of my location"
          class="map-image"
        />
      </div>
  </template>
  
  <!-- <script>
  export default {
    data() {
      return {
        latitude: null,
        longitude: null,
        error: null,
        mapUrl: null,
      };
    },
    methods: {
      getLocation() {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(
            this.setPosition,
            this.showError
          );
        } else {
          this.error = "Geolocation is not supported by this browser.";
        }
      },
      setPosition(position) {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
        this.updateMapUrl();
      },
      showError(error) {
        switch (error.code) {
          case error.PERMISSION_DENIED:
            this.error = "User denied the request for Geolocation.";
            break;
          case error.POSITION_UNAVAILABLE:
            this.error = "Location information is unavailable.";
            break;
          case error.TIMEOUT:
            this.error = "The request to get user location timed out.";
            break;
          case error.UNKNOWN_ERROR:
            this.error = "An unknown error occurred.";
            break;
        }
      },
      updateMapUrl() {
        const apiKey = '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d546.0737132667462!2d1.5763973250862315!3d6.22851862994744!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1023939d979d1b83%3A0x8509a37ac83dae1a!2sCDE%20KOINONIA!5e1!3m2!1sfr!2sgh!4v1723779045624!5m2!1sfr!2sgh" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'; // Remplacez par votre clé API
        this.mapUrl = `https://maps.googleapis.com/maps/api/staticmap?center=${this.latitude},${this.longitude}&zoom=13&size=600x400&key=${apiKey}`;
      }
    },
  };
  </script> -->
  
  <!-- <style scoped>
  .geolocation-container {
    text-align: center;
    padding: 20px;
  }
  
  .error {
    color: red;
  }
  
  button {
    padding: 10px 20px;
    margin-top: 20px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #0056b3;
  }
  
  .map-image {
    width: 100%;
    height: auto;
    margin-top: 20px;
  }
  </style> -->
  