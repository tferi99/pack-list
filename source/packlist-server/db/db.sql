--
-- PostgreSQL database dump
--

SET statement_timeout = 0;
SET lock_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET client_min_messages = warning;

--
-- Name: plpgsql; Type: EXTENSION; Schema: -; Owner: 
--

CREATE EXTENSION IF NOT EXISTS plpgsql WITH SCHEMA pg_catalog;


--
-- Name: EXTENSION plpgsql; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION plpgsql IS 'PL/pgSQL procedural language';


SET default_tablespace = '';

SET default_with_oids = false;

--
-- Name: app_user; Type: TABLE; Schema: public; Owner: postgres; Tablespace: 
--

CREATE TABLE public.app_user (
    id integer NOT NULL,
    username character varying(128) NOT NULL,
    password character varying(128) NOT NULL,
    admin boolean DEFAULT false NOT NULL,
    active boolean DEFAULT true NOT NULL
);


ALTER TABLE public.app_user OWNER TO postgres;

--
-- Name: app_user_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.app_user_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.app_user_id_seq OWNER TO postgres;

--
-- Name: app_user_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.app_user_id_seq OWNED BY public.app_user.id;


--
-- Name: category; Type: TABLE; Schema: public; Owner: postgres; Tablespace: 
--

CREATE TABLE public.category (
    id integer NOT NULL,
    name character varying(128) NOT NULL,
    "order" integer NOT NULL,
    owner_id integer NOT NULL,
    category_group_id integer NOT NULL
);


ALTER TABLE public.category OWNER TO postgres;

--
-- Name: category_group; Type: TABLE; Schema: public; Owner: postgres; Tablespace: 
--

CREATE TABLE public.category_group (
    id integer NOT NULL,
    name character varying(128) NOT NULL
);


ALTER TABLE public.category_group OWNER TO postgres;

--
-- Name: category_group_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.category_group_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.category_group_id_seq OWNER TO postgres;

--
-- Name: category_group_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.category_group_id_seq OWNED BY public.category_group.id;


--
-- Name: category_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.category_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.category_id_seq OWNER TO postgres;

--
-- Name: category_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.category_id_seq OWNED BY public.category.id;


--
-- Name: item; Type: TABLE; Schema: public; Owner: postgres; Tablespace: 
--

CREATE TABLE public.item (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    "order" integer NOT NULL,
    category_id integer NOT NULL
);


ALTER TABLE public.item OWNER TO postgres;

--
-- Name: item_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.item_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.item_id_seq OWNER TO postgres;

--
-- Name: item_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.item_id_seq OWNED BY public.item.id;


--
-- Name: packing; Type: TABLE; Schema: public; Owner: postgres; Tablespace: 
--

CREATE TABLE public.packing (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    user_id integer NOT NULL,
    trip_id integer NOT NULL
);


ALTER TABLE public.packing OWNER TO postgres;

--
-- Name: packing_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.packing_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.packing_id_seq OWNER TO postgres;

--
-- Name: packing_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.packing_id_seq OWNED BY public.packing.id;


--
-- Name: packing_item; Type: TABLE; Schema: public; Owner: postgres; Tablespace: 
--

CREATE TABLE public.packing_item (
    id integer NOT NULL,
    packed boolean NOT NULL,
    packing_id integer NOT NULL,
    item_id integer NOT NULL
);


ALTER TABLE public.packing_item OWNER TO postgres;

--
-- Name: packing_item_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.packing_item_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.packing_item_id_seq OWNER TO postgres;

--
-- Name: packing_item_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.packing_item_id_seq OWNED BY public.packing_item.id;


--
-- Name: person; Type: TABLE; Schema: public; Owner: postgres; Tablespace: 
--

CREATE TABLE public.person (
    id integer NOT NULL,
    name character varying(128) NOT NULL,
    email character varying(256) NOT NULL,
    rank integer
);


ALTER TABLE public.person OWNER TO postgres;

--
-- Name: person_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.person_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.person_id_seq OWNER TO postgres;

--
-- Name: person_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.person_id_seq OWNED BY public.person.id;


--
-- Name: trip; Type: TABLE; Schema: public; Owner: postgres; Tablespace: 
--

CREATE TABLE public.trip (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    owner_id integer NOT NULL
);


ALTER TABLE public.trip OWNER TO postgres;

--
-- Name: trip_categories; Type: TABLE; Schema: public; Owner: postgres; Tablespace: 
--

CREATE TABLE public.trip_categories (
    trip_id integer NOT NULL,
    category_id integer NOT NULL
);


ALTER TABLE public.trip_categories OWNER TO postgres;

--
-- Name: trip_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.trip_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.trip_id_seq OWNER TO postgres;

--
-- Name: trip_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.trip_id_seq OWNED BY public.trip.id;


--
-- Name: trip_used_items; Type: TABLE; Schema: public; Owner: postgres; Tablespace: 
--

CREATE TABLE public.trip_used_items (
    trip_id integer NOT NULL,
    item_id integer NOT NULL
);


ALTER TABLE public.trip_used_items OWNER TO postgres;

--
-- Name: id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.app_user ALTER COLUMN id SET DEFAULT nextval('public.app_user_id_seq'::regclass);


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.category ALTER COLUMN id SET DEFAULT nextval('public.category_id_seq'::regclass);


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.category_group ALTER COLUMN id SET DEFAULT nextval('public.category_group_id_seq'::regclass);


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.item ALTER COLUMN id SET DEFAULT nextval('public.item_id_seq'::regclass);


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.packing ALTER COLUMN id SET DEFAULT nextval('public.packing_id_seq'::regclass);


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.packing_item ALTER COLUMN id SET DEFAULT nextval('public.packing_item_id_seq'::regclass);


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.person ALTER COLUMN id SET DEFAULT nextval('public.person_id_seq'::regclass);


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.trip ALTER COLUMN id SET DEFAULT nextval('public.trip_id_seq'::regclass);


--
-- Data for Name: app_user; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.app_user (id, username, password, admin, active) FROM stdin;
1	John Smith	12345	f	t
3	John Smith	12345	f	t
4	John Smith	12345	f	t
6	John Smith	12345	f	f
2	abc	12345	f	t
5	cica	12345	f	f
7	John Smith	12345	f	t
8	John Smith	12345	f	t
9	John Smith	12345	f	t
10	John Smith	12345	f	t
11	John Smith	12345	f	t
12	John Smith	12345	f	t
13	John Smith	12345	f	t
14	John Smith	12345	f	t
15	John Smith	12345	f	t
16	Peti	123	f	t
17	Anna	xyz	f	f
18	Peti	123	f	t
19	Anna	xyz	f	f
20	Peti	123	f	t
21	Anna	xyz	f	f
22	Peti	123	f	t
23	Anna	xyz	f	f
\.


--
-- Name: app_user_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.app_user_id_seq', 23, true);


--
-- Data for Name: category; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.category (id, name, "order", owner_id, category_group_id) FROM stdin;
\.


--
-- Data for Name: category_group; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.category_group (id, name) FROM stdin;
\.


--
-- Name: category_group_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.category_group_id_seq', 1, false);


--
-- Name: category_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.category_id_seq', 1, false);


--
-- Data for Name: item; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.item (id, name, "order", category_id) FROM stdin;
\.


--
-- Name: item_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.item_id_seq', 1, false);


--
-- Data for Name: packing; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.packing (id, name, user_id, trip_id) FROM stdin;
\.


--
-- Name: packing_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.packing_id_seq', 1, false);


--
-- Data for Name: packing_item; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.packing_item (id, packed, packing_id, item_id) FROM stdin;
\.


--
-- Name: packing_item_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.packing_item_id_seq', 1, false);


--
-- Data for Name: person; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.person (id, name, email, rank) FROM stdin;
1	John Smith	js@testorg	5
2	John Smith	js@testorg	5
3	John Smith	js@testorg	5
4	John Smith	js@testorg	5
5	John Smith	js@testorg	5
6	John Smith	js@testorg	5
7	John Smith	js@testorg	5
8	John Smith	js@testorg	5
\.


--
-- Name: person_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.person_id_seq', 8, true);


--
-- Data for Name: trip; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.trip (id, name, owner_id) FROM stdin;
\.


--
-- Data for Name: trip_categories; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.trip_categories (trip_id, category_id) FROM stdin;
\.


--
-- Name: trip_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.trip_id_seq', 1, false);


--
-- Data for Name: trip_used_items; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.trip_used_items (trip_id, item_id) FROM stdin;
\.


--
-- Name: app_user_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres; Tablespace: 
--

ALTER TABLE ONLY public.app_user
    ADD CONSTRAINT app_user_pkey PRIMARY KEY (id);


--
-- Name: category_group_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres; Tablespace: 
--

ALTER TABLE ONLY public.category_group
    ADD CONSTRAINT category_group_pkey PRIMARY KEY (id);


--
-- Name: category_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres; Tablespace: 
--

ALTER TABLE ONLY public.category
    ADD CONSTRAINT category_pkey PRIMARY KEY (id);


--
-- Name: item_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres; Tablespace: 
--

ALTER TABLE ONLY public.item
    ADD CONSTRAINT item_pkey PRIMARY KEY (id);


--
-- Name: packing_item_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres; Tablespace: 
--

ALTER TABLE ONLY public.packing_item
    ADD CONSTRAINT packing_item_pkey PRIMARY KEY (id);


--
-- Name: packing_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres; Tablespace: 
--

ALTER TABLE ONLY public.packing
    ADD CONSTRAINT packing_pkey PRIMARY KEY (id);


--
-- Name: person_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres; Tablespace: 
--

ALTER TABLE ONLY public.person
    ADD CONSTRAINT person_pkey PRIMARY KEY (id);


--
-- Name: trip_categories_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres; Tablespace: 
--

ALTER TABLE ONLY public.trip_categories
    ADD CONSTRAINT trip_categories_pkey PRIMARY KEY (trip_id, category_id);


--
-- Name: trip_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres; Tablespace: 
--

ALTER TABLE ONLY public.trip
    ADD CONSTRAINT trip_pkey PRIMARY KEY (id);


--
-- Name: trip_used_items_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres; Tablespace: 
--

ALTER TABLE ONLY public.trip_used_items
    ADD CONSTRAINT trip_used_items_pkey PRIMARY KEY (trip_id, item_id);


--
-- Name: category_category_group_id_foreign; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.category
    ADD CONSTRAINT category_category_group_id_foreign FOREIGN KEY (category_group_id) REFERENCES public.category_group(id) ON UPDATE CASCADE;


--
-- Name: category_owner_id_foreign; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.category
    ADD CONSTRAINT category_owner_id_foreign FOREIGN KEY (owner_id) REFERENCES public.app_user(id) ON UPDATE CASCADE;


--
-- Name: item_category_id_foreign; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.item
    ADD CONSTRAINT item_category_id_foreign FOREIGN KEY (category_id) REFERENCES public.category(id) ON UPDATE CASCADE;


--
-- Name: packing_caller_id_foreign; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.packing
    ADD CONSTRAINT packing_caller_id_foreign FOREIGN KEY (user_id) REFERENCES public.app_user(id) ON UPDATE CASCADE;


--
-- Name: packing_item_item_id_foreign; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.packing_item
    ADD CONSTRAINT packing_item_item_id_foreign FOREIGN KEY (item_id) REFERENCES public.item(id) ON UPDATE CASCADE;


--
-- Name: packing_item_packing_id_foreign; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.packing_item
    ADD CONSTRAINT packing_item_packing_id_foreign FOREIGN KEY (packing_id) REFERENCES public.packing(id) ON UPDATE CASCADE;


--
-- Name: packing_trip_id_foreign; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.packing
    ADD CONSTRAINT packing_trip_id_foreign FOREIGN KEY (trip_id) REFERENCES public.trip(id) ON UPDATE CASCADE;


--
-- Name: trip_categories_category_id_foreign; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.trip_categories
    ADD CONSTRAINT trip_categories_category_id_foreign FOREIGN KEY (category_id) REFERENCES public.category(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: trip_categories_trip_id_foreign; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.trip_categories
    ADD CONSTRAINT trip_categories_trip_id_foreign FOREIGN KEY (trip_id) REFERENCES public.trip(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: trip_owner_id_foreign; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.trip
    ADD CONSTRAINT trip_owner_id_foreign FOREIGN KEY (owner_id) REFERENCES public.app_user(id) ON UPDATE CASCADE;


--
-- Name: trip_used_items_item_id_foreign; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.trip_used_items
    ADD CONSTRAINT trip_used_items_item_id_foreign FOREIGN KEY (item_id) REFERENCES public.item(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: trip_used_items_trip_id_foreign; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.trip_used_items
    ADD CONSTRAINT trip_used_items_trip_id_foreign FOREIGN KEY (trip_id) REFERENCES public.trip(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: SCHEMA public; Type: ACL; Schema: -; Owner: postgres
--

REVOKE ALL ON SCHEMA public FROM PUBLIC;
REVOKE ALL ON SCHEMA public FROM postgres;
GRANT ALL ON SCHEMA public TO postgres;
GRANT ALL ON SCHEMA public TO PUBLIC;


--
-- PostgreSQL database dump complete
--

