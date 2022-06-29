---
path: '/blog/typeorm-like-jpa'
title: 'Typeorm like jpa'
published: false
date: '2018-03-09'
---

[Typeorm](http://typeorm.io/#/)을 이용해보면서 예전에 개발하던 JPA와 유사한 느낌을 받았다.
물론 ORM을 다루는 라이브러리가 비슷할테지만 한번 JPA와 비교해보자. ex) [OnePage](https://github.com/OnePageAndroid/OnePageServer)

```java
// Page.java
import javax.persistence.*;
import java.sql.SQLException;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(of = "id")
@Entity
@Table(catalog = "onepage", name = "page")
@Where(clause = "deleted = 0")
public class Page extends Modified {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "pageId")
    private Long id;
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "locationId")
    @Where(clause = "deleted = 0")
    private Location location;
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "userId")
    @Where(clause = "deleted = 0")
    private User user;
    @Column
    private String content;
    @Column
    private boolean deleted;

    public static Page of(Location location, User user, String content) throws SQLException {
        return Page.builder()
            .location(location)
            .user(user)
            .content(content)
            .build();
    }

    public void deleted() {
		this.deleted = true;
	}
}
```

```javascript
// page.js
```

```java
// User.java
import javax.persistence.*;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Pattern;
import javax.validation.constraints.Size;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(catalog = "onepage", name = "user")
@Where(clause = "deleted = 0")
public class User extends Created {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "userId")
	private Long id;
	@Column
	@NotNull
	@Size(min=1,message="이메일을 입력하세요.")
	@Pattern(regexp="^(\\w+)(((\\.?)(\\w+))*)[@](((\\w+)[.])+)(\\w{2,3})$",message="이메일 형식만 가능합니다.")
	private String email;
	@Column
	private boolean deleted;

	public static User of(String email) {
		return User.builder()
			.email(email)
			.build();
	}
}
```

```javascript
// user.js
```

```java
// Location.java
import javax.persistence.*;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(catalog = "onepage", name = "location")
@Where(clause = "deleted = 0")
public class Location extends Created {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "locationId")
	private Long id;
	@Column
	private Double latitude;
	@Column
	private Double longitude;
	@Column
	private String name;
	@Column
	private String engName;
	@Column
	private String address;
	@Column
	private boolean deleted;

	public static Location of(LocationDto locationDto) {
		return Location.builder()
			.latitude(locationDto.getLatitude())
			.longitude(locationDto.getLongitude())
			.name(locationDto.getName())
			.engName(locationDto.getEngName())
			.address(locationDto.getAddress()).build();
	}

	public static Location of(Double latitude, Double longitude, String name, String engName, String address) {
		return Location.builder()
			.latitude(latitude)
			.longitude(longitude)
			.name(name)
			.engName(engName)
			.address(address).build();
	}
}
```

```javascript
// location.js
```

비슷한 점이 많아 흥미로운 점이 많다.
