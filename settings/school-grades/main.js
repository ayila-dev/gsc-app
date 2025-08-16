import { listTypeUser } from "./lib.js";
import { currentClass } from "./lib.js";
import { checkTypeUser } from "./lib.js";
import { sidebar } from "./lib.js";
import { gscFooterApp } from "./lib.js";
import { controleForm } from "./lib.js";
import { showCustomFieldAmount } from "./lib.js";

document.addEventListener("DOMContentLoaded", () => {
    let path = window.location.pathname;
    switch (path) {
        /**
         * Page index
         */
        case "/gsc/":
            checkTypeUser(listTypeUser, currentClass);
            console.log("Page de connexion");
break;

        /**
         * Pages of personals
         */
        case "/gsc/modules/personals/add-personal.html":
            sidebar();
            gscFooterApp();
            controleForm();
            console.log("Page d'ajout d'un personnel");
break;

        case "/gsc/modules/personals/edit-personal.html":
            sidebar();
            gscFooterApp();
            controleForm();
            console.log("Page de mise à jour d'un personnel");
break;

        case "/gsc/modules/personals/list-personal.html":
            sidebar();
            gscFooterApp();
            console.log("Page d'affichage des personnels");
break;

        /**
         * Pages of professors
         */
        case "/gsc/modules/professors/add-prof.html":
            sidebar();
            gscFooterApp();
            controleForm();
            console.log("Page d'ajout d'un professeur");
break;

        case "/gsc/modules/professors/edit-prof.html":
            sidebar();
            gscFooterApp();
            controleForm();
            console.log("Page d'édition d'un professeur");
break;

        case "/gsc/modules/professors/list-prof.html":
            sidebar();
            gscFooterApp();
            console.log("Page d'affichage de la liste des professeurs");
break;

        /**
         * Pages of parents
         */
        case "/gsc/modules/parents/add-parent.html":
            sidebar();
            gscFooterApp();
            controleForm();
            console.log("Page d'ajout d'un parent");
break;

        case "/gsc/modules/parents/edit-parent.html":
            sidebar();
            gscFooterApp();
            controleForm();
            console.log("Page d'édition d'un parent");
break;

        case "/gsc/modules/parents/list-parent.html":
            sidebar();
            gscFooterApp();
            console.log("Page d'affichage de la liste des parents");
break;

        /**
         * Pages of students
         */
        case "/gsc/modules/students/add-student.html":
            sidebar();
            gscFooterApp();
            controleForm();
            console.log("Page d'inscription d'un élève");
break;

        case "/gsc/modules/students/reinscription-student.html":
            sidebar();
            gscFooterApp();
            controleForm();
            console.log("Page de reinscription d'un élève");
break;

        case "/gsc/modules/students/edit-student.html":
            sidebar();
            gscFooterApp();
            controleForm();
            console.log("Page d'édition d'un utlisateur");
break;

        case "/gsc/modules/students/list-student.html":
            sidebar();
            gscFooterApp();
            console.log("Page d'affichage de la liste des élèves");
break;

        /**
         * Pages of scolarities
         */
        case "/gsc/modules/scolarities/edit-scolarity.html":
            sidebar();
            gscFooterApp();
            showCustomFieldAmount();
            console.log("Page d'édition de la scolarités d'un élève");
break;

        case "/gsc/modules/scolarities/list-scolarity.html":
            sidebar();
            gscFooterApp();
            console.log("Page d'affichage de la gestion des scolarités");
break;

        /**
         * Pages of school-years
         */
        case "/gsc/settings/school-years/add-school-year.html":
            sidebar();
            gscFooterApp();
            console.log("Page d'ajout d'une année scolaire");
break;

        case "/gsc/settings/school-years/edit-school-year.html":
            sidebar();
            gscFooterApp();
            console.log("Page d'édition de l'année scolaire");
break;

        case "/gsc/settings/school-years/list-school-year.html":
            sidebar();
            gscFooterApp();
            console.log("Page d'affichage de la liste des années scolaires");
break;
        
        /**
         * Pages of school-centers
         */
        case "/gsc/settings/school-centers/add-school-center.html":
            sidebar();
            gscFooterApp();
            console.log("Page d'ajout d'un centre");
break;

        case "/gsc/settings/school-centers/edit-school-center.html":
            sidebar();
            gscFooterApp();
            console.log("Page d'édition d'un centre");
break;

        case "/gsc/settings/school-centers/list-school-center.html":
            sidebar();
            gscFooterApp();
            console.log("Page d'affichage de la liste des centres");
break;

        /**
         * Pages of school-cycle
         */
        case "/gsc/settings/school-cycles/add-school-cycle.html":
            sidebar();
            gscFooterApp();
            console.log("Page d'ajout d'un cycle");
break;

        case "/gsc/settings/school-cycles/edit-school-cycle.html":
            sidebar();
            gscFooterApp();
            console.log("Page d'édition d'un cycle");
break;

        case "/gsc/settings/school-cycles/list-school-cycle.html":
            sidebar();
            gscFooterApp();
            console.log("Page d'affichage de la liste des cycles");
break;

        /**
         * Pages of school-grades
         */
        case "/gsc/settings/school-grades/add-school-grade.html":
            sidebar();
            gscFooterApp();
            console.log("Page d'ajout d'une classe");
break;

        case "/gsc/settings/school-grades/edit-school-grade.html":
            sidebar();
            gscFooterApp();
            console.log("Page d'édition d'une classe");
break;

        case "/gsc/settings/school-grades/list-school-grade.html":
            sidebar();
            gscFooterApp();
            console.log("Page d'affichage de la liste des classes");
break;

        /**
         * Pages of school-series
         */
        case "/gsc/settings/school-series/add-school-serie.html":
            sidebar();
            gscFooterApp();
            console.log("Page d'ajout d'une série");
break;

        case "/gsc/settings/school-series/edit-school-serie.html":
            sidebar();
            gscFooterApp();
            console.log("Page d'édition d'une série");
break;

        case "/gsc/settings/school-series/list-school-serie.html":
            sidebar();
            gscFooterApp();
            console.log("Page d'affichage de la liste des séries");
break;

        /**
         * Pages of school-courses
         */
        case "/gsc/settings/school-courses/add-school-course.html":
            sidebar();
            gscFooterApp();
            console.log("Page d'ajout d'une matière");
break;

        case "/gsc/settings/school-courses/edit-school-course.html":
            sidebar();
            gscFooterApp();
            console.log("Page d'édition d'une matière");
break;

        case "/gsc/settings/school-courses/list-school-course.html":
            sidebar();
            gscFooterApp();
            console.log("Page d'affichage de la liste des matières");
break;

        /**
         * Pages of school-roles
         */
        case "/gsc/settings/school-roles/add-school-role.html":
            sidebar();
            gscFooterApp();
            console.log("Page d'ajout d'un rôle");
break;

        case "/gsc/settings/school-roles/edit-school-role.html":
            sidebar();
            gscFooterApp();
            console.log("Page d'édition d'un rôle");
break;

        case "/gsc/settings/school-roles/list-school-role.html":
            sidebar();
            gscFooterApp();
            console.log("Page d'affichage de la liste des rôles");
break;

        /**
         * Pages of template components
         */
        case "/gsc/components/dashboard.html":
            sidebar();
            gscFooterApp();
            console.log("Template du dashboard");
break;

        /**
         * Pages of error 404
         */
        default:
            console.log(window.location.pathname);
            console.error("Erreur 404\n\nPage introuvable");
break;
    }
});
