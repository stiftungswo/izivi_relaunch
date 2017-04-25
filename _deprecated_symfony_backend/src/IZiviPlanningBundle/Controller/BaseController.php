<?php
namespace IZiviPlanningBundle\Controller;

use FOS\RestBundle\Controller\FOSRestController;
use IZiviPlanningBundle\Entity\EntityInterface;
use IZiviPlanningBundle\Entity\User;

class BaseController extends FOSRestController
{
    protected $currentUser = null;

    /**
     * Get the current user
     *
     * @return User
     */
    protected function getCurrentUser()
    {
        $user = $this->container->get('security.token_storage')->getToken()->getUser();
        if (!is_object($user) || !$user instanceof UserInterface) {
            throw new AccessDeniedException(
                'This user does not have access to this section.');
        }

        return $user;
    }

    /**
     * Fetch a Entity or throw an 404 Exception.
     *
     * @param mixed $id
     *
     * @param       $service
     *
     * @return EntityInterface
     *
     */
    protected function getOr404($id, $service)
    {
        if (! ($entity = $this->container->get($service)->get($id))) {
            throw new NotFoundHttpException(sprintf('The resource \'%s\' was not found.', $id));
        }
        return $entity;
    }
}